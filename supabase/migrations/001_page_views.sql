-- OPC Page Views table
-- Tracks every page visit with IP, geo, user agent, and referer

CREATE TABLE IF NOT EXISTS opc_page_views (
  id BIGSERIAL PRIMARY KEY,
  page_path TEXT NOT NULL DEFAULT '/',
  visitor_ip INET,
  city TEXT,
  region TEXT,
  country TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  user_agent TEXT,
  referer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_opc_page_views_created_at ON opc_page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_opc_page_views_ip ON opc_page_views(visitor_ip);
CREATE INDEX IF NOT EXISTS idx_opc_page_views_country ON opc_page_views(country);
CREATE INDEX IF NOT EXISTS idx_opc_page_views_page_path ON opc_page_views(page_path);

-- RLS policies
ALTER TABLE opc_page_views ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (for tracking)
CREATE POLICY "Anyone can insert views" ON opc_page_views
  FOR INSERT WITH CHECK (true);

-- Only service role can read (for admin dashboard)
CREATE POLICY "Service role can read views" ON opc_page_views
  FOR SELECT USING (auth.role() = 'service_role');
