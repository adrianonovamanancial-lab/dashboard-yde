import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ofwppcrrvnuweixckcqap.supabase.co"
const supabaseAnonKey = "sb_publishable_r2Nr6Fzju0G-7J1Qgt8cdw_dwD7hQjS"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
