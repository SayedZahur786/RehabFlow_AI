-- Add unique constraint to baseline_profiles to support ON CONFLICT upserts
CREATE UNIQUE INDEX IF NOT EXISTS idx_baseline_profiles_user_id_unique ON baseline_profiles(user_id);
ALTER TABLE baseline_profiles ADD CONSTRAINT baseline_profiles_user_id_key UNIQUE USING INDEX idx_baseline_profiles_user_id_unique;
