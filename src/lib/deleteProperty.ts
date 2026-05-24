import { supabase } from "./supabase";

export async function deleteProperty(
    propertyId: number,
    images: string[]
) {

    // remover imagens do storage
    const imagePaths = images.map((url) => {

        const parts = url.split("/storage/v1/object/public/properties/");

        return parts[1];
    });

    if (imagePaths.length > 0) {

        const { error: storageError } = await supabase.storage
            .from("properties")
            .remove(imagePaths);

        if (storageError) {
            console.error(storageError);
        }
    }

    // remover imóvel do banco
    const { error } = await supabase
        .from("properties")
        .delete()
        .eq("id", propertyId);

    if (error) {
        throw error;
    }
}