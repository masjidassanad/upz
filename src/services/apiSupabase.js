import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
const apiSupabase = createClient(supabaseUrl, supabaseKey);

// Helper function to handle Supabase errors
const handleSupabaseError = (error) => {
  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }
};

// Fetch all settings
const getSettings = async () => {
  const { data, error } = await apiSupabase
    .from("settings")
    .select("*")
    .order("name", { ascending: true })
    .limit(500);

  handleSupabaseError(error);

  // Transform array to nested object structure
  const structuredData = (data || []).reduce((acc, setting) => {
    if (!acc[setting.type]) {
      acc[setting.type] = {};
    }
    acc[setting.type][setting.name] = setting.value;
    return acc;
  }, {});

  return structuredData;
};

// Fetch all programs (with optional filtering)
const getPrograms = async ({ status = "publish", featured } = {}) => {
  let query = apiSupabase
    .from("programs")
    .select("*")
    .order("sort_order", { ascending: true })
    .limit(500);

  if (status) query = query.eq("status", status);
  if (featured !== undefined) query = query.eq("featured", featured);

  const { data, error } = await query;

  handleSupabaseError(error);
  return data || [];
};

// Fetch initial data (settings + programs)
const getInit = async () => {
  const [settings, programs] = await Promise.all([
    getSettings(),
    getPrograms({ status: "publish" })
  ]);

  return { settings, programs };
};

// Fetch transactions for a specific program
const getTransactionsByProgramId = async (programId) => {
  const { data, error } = await apiSupabase
    .from("transactions")
    .select("*")
    .eq("program_id", programId)
    .order("created", { ascending: false })
    .limit(500);

  handleSupabaseError(error);
  return data || [];
};

// Fetch posts for a specific program
const getPostsByProgramId = async (programId, { status = "publish" } = {}) => {
  let query = apiSupabase
    .from("posts")
    .select("*")
    .eq("program_id", programId)
    .order("created", { ascending: false })
    .limit(500);

  if (status) query = query.eq("status", status);

  const { data, error } = await query;

  handleSupabaseError(error);
  return data || [];
};

export default {
  getSettings,
  getPrograms,
  getInit,
  getTransactionsByProgramId,
  getPostsByProgramId,
};
