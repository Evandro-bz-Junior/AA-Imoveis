import { properties } from "@/data/properties"
import { supabase } from "./supabase";

/* export async function getProperties() {
    return properties
} */

export async function getProperties() {
    const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}

export async function getPropertyById(id: number | string) {
    return properties.find((p) => p.id === id)
}

