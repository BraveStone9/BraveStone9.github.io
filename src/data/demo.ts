import { links } from './links'

export interface Finding {
  location: string
  issue: string
  fix: string
}

// Recorded from PR #1 on BraveStone9/pr-reviewer-demo: the diff the service received
// and the findings it posted back. Text is copied as-is from the real run.
export const prDemo = {
  source: links.prReviewerPr1,
  filename: 'auth.py',
  code: [
    'API_KEY = "sk-live-abc123xyz"',
    '',
    '',
    'def get_user(user_id):',
    '    query = f"SELECT * FROM users WHERE id = {user_id}"',
    '    db.execute(query)',
    '    return db.fetchone()',
  ],
  findings: [
    {
      location: 'auth.py:1',
      issue: 'Hardcoded API key detected',
      fix: 'Store the secret in an environment variable or a secrets manager (e.g., `os.environ.get("API_KEY")`).',
    },
    {
      location: 'auth.py:5',
      issue: 'SQL injection via string formatting with user input',
      fix: 'Use a parameterized query instead of string interpolation (e.g., `db.execute("SELECT * FROM users WHERE id = ?", (user_id,))`).',
    },
  ] satisfies Finding[],
}

export interface ToolStep {
  tool: string
  args: string
  note: string
}

// Replayed from logs/sample_run.log in the mcp_devos repo (Gemini driving the MCP server).
export const devosDemo = {
  source: links.devosSampleOutput,
  prompt: 'Something is wrong with the inventory app. Can you investigate and tell me what’s broken and why?',
  steps: [
    { tool: 'list_dir', args: "path='.'", note: 'Looks at the project root' },
    { tool: 'list_dir', args: "path='buggy_app'", note: 'Opens the folder it found' },
    { tool: 'read_log_file', args: "filename='buggy_app/app.log'", note: 'Reads the log for errors' },
    { tool: 'read_source_file', args: "filepath='buggy_app/inventory.py'", note: 'Opens the file the log pointed to' },
  ] satisfies ToolStep[],
  answer: [
    'The inventory application crashes with an IndexError: list index out of range when attempting to apply a discount to an item list.',
    'In main(), a list of prices is defined with two elements: prices = [10, 20]. The code then calls apply_discount(prices, 2). Inside apply_discount, it attempts to access prices[2], which does not exist because index 2 is out of bounds for a 2-element list.',
  ],
}
