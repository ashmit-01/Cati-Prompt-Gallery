// AI Prompt Templates
// Contains the predefined prompt templates for the Education category.
import EDUCATION_PROMPT_TEMPLATES from '../../../data/promptTemplates/educationPrompts';




// After  const [outboundSettings, setOutboundSettings] = useState({ callObjective: '', introScript: '', followUpQuestions: [], closingStatement: '', objectionHandling: '' });


 // AI prompt templates
  const [promptTemplateCategory, setPromptTemplateCategory] = useState('');
  const [selectedPromptTemplate, setSelectedPromptTemplate] = useState('');

// Handles selection of a specific AI prompt template.
// Updates the selected template state and loads the template prompt
// into the agent's system prompt.

  const handlePromptTemplateChange = (templateKey) => {
  setSelectedPromptTemplate(templateKey);

  if (!templateKey) {
    setIsSystemPromptCustom(false);
    return;
  }

  const template = EDUCATION_PROMPT_TEMPLATES[templateKey];

  if (template) {
    setSystemPrompt(template.prompt);
    setIsSystemPromptCustom(true);
  }
};



// AFTER : setSystemPrompt(aiConfig.systemPrompt || agent.prompt || '');


// Restore selected AI prompt template
setPromptTemplateCategory(aiConfig.promptTemplateCategory || '');
setSelectedPromptTemplate(aiConfig.selectedPromptTemplate || '');




//   AFTER : May 29, 2026: Include industry context
//   selectedIndustry: selectedIndustry || null

// AI Prompt Template
// Save the selected category and specific template
// along with the rest of the agent configuration.
promptTemplateCategory: promptTemplateCategory || null,
selectedPromptTemplate: selectedPromptTemplate || null,

systemPrompt: systemPrompt ? systemPrompt.trim() : "",




// Inside {/* Direction Settings */}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                AI Prompt Template
              </label>

              <select
                value={promptTemplateCategory}
                onChange={(e) => setPromptTemplateCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition"
              >
                <option value="">Select Template Category</option>
                <option value="education">Education</option>
              </select>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Select an industry to use its conversational AI prompt templates.
              </p>
            </div>
            {promptTemplateCategory === 'education' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Education Prompt Template
              </label>

           <select
            value={selectedPromptTemplate}
            onChange={(e) => handlePromptTemplateChange(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition"
          >
            <option value="">Select Education Template</option>

            {Object.entries(EDUCATION_PROMPT_TEMPLATES).map(([key, template]) => (
              <option key={key} value={key}>
                {template.label}
              </option>
            ))}
          </select>
            </div>