-- OPC Newsletter Subscribers table
-- Stores email subscriptions from the "Stay in the Loop" form

CREATE TABLE IF NOT EXISTS opc_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'homepage',       -- 来源：homepage / nav / tutorial / ...
  ip INET,
  country TEXT,
  city TEXT,
  user_agent TEXT,
  referer TEXT,
  confirmed BOOLEAN DEFAULT FALSE,       -- 为以后双重确认邮件预留
  unsubscribed BOOLEAN DEFAULT FALSE,    -- 退订标志
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_opc_subscribers_email ON opc_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_opc_subscribers_created_at ON opc_subscribers(created_at);
CREATE INDEX IF NOT EXISTS idx_opc_subscribers_source ON opc_subscribers(source);

-- RLS
ALTER TABLE opc_subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a subscription (via service role from our API)
CREATE POLICY "Anyone can subscribe" ON opc_subscribers
  FOR INSERT WITH CHECK (true);

-- Only service role can read (for admin dashboard)
CREATE POLICY "Service role can read subscribers" ON opc_subscribers
  FOR SELECT USING (auth.role() = 'service_role');

-- Only service role can update (退订 / 确认)
CREATE POLICY "Service role can update subscribers" ON opc_subscribers
  FOR UPDATE USING (auth.role() = 'service_role');
