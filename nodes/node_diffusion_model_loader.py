"""Diffusion-only loading for the Pixaroma folder-aware model picker."""

import torch

import comfy.sd
import folder_paths


class PixaromaDiffusionModelLoader:
    DESCRIPTION = (
        "Load a diffusion model from ComfyUI's configured diffusion_models folders. "
        "This loads the MODEL only; load the CLIP text encoder and VAE separately. "
        "Weight dtype uses the same options as ComfyUI's Load Diffusion Model node."
    )

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "unet_name": (
                    folder_paths.get_filename_list("diffusion_models"),
                    {
                        "tooltip": "The diffusion model to load. CLIP and VAE must be loaded separately."
                    },
                ),
                "weight_dtype": (
                    ["default", "fp8_e4m3fn", "fp8_e4m3fn_fast", "fp8_e5m2"],
                    {
                        "advanced": True,
                        "tooltip": "Weight dtype for the diffusion model only. Default uses ComfyUI's automatic choice; fp8_e4m3fn_fast also enables FP8 optimizations.",
                    },
                ),
            }
        }

    RETURN_TYPES = ("MODEL",)
    OUTPUT_TOOLTIPS = ("The diffusion model only. Load CLIP and VAE separately.",)
    FUNCTION = "load_unet"
    CATEGORY = "👑 Pixaroma/🧰 Utility"

    def load_unet(self, unet_name, weight_dtype):
        model_options = {}
        if weight_dtype == "fp8_e4m3fn":
            model_options["dtype"] = torch.float8_e4m3fn
        elif weight_dtype == "fp8_e4m3fn_fast":
            model_options["dtype"] = torch.float8_e4m3fn
            model_options["fp8_optimizations"] = True
        elif weight_dtype == "fp8_e5m2":
            model_options["dtype"] = torch.float8_e5m2

        unet_path = folder_paths.get_full_path_or_raise("diffusion_models", unet_name)
        model = comfy.sd.load_diffusion_model(unet_path, model_options=model_options)
        return (model,)


NODE_CLASS_MAPPINGS = {"PixaromaDiffusionModelLoader": PixaromaDiffusionModelLoader}
NODE_DISPLAY_NAME_MAPPINGS = {
    "PixaromaDiffusionModelLoader": "Diffusion Model Loader Pixaroma"
}
