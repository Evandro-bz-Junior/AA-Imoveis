import { supabase } from "./supabase";

export async function uploadImage(
    file: File,
    propertyId: number
) {
    const fileExt = file.name.split(".").pop();

    const fileName = `${crypto.randomUUID()}.${fileExt}`;

    const filePath = `${propertyId}/${fileName}`;

    const { error } = await supabase.storage
        .from("properties")
        .upload(filePath, file);

    if (error) {
        throw error;
    }

    const { data } = supabase.storage
        .from("properties")
        .getPublicUrl(filePath);

    return data.publicUrl;
}