 // NEW: Receive the AI prompt template selections
        // These values are coming from the frontend when the user clicks Save.    // For req.body()
        promptTemplateCategory,
        selectedPromptTemplate,



// Inside const aiConfig 
         // NEW: Save the selected prompt template category.
        // Example: "education", "real_estate", "hospital"
        promptTemplateCategory:
        promptTemplateCategory || existingAiConfig.promptTemplateCategory || "",

        // NEW: Save the specific prompt template.
        // Example: "college_admissions", "school_admissions"
        selectedPromptTemplate:
        selectedPromptTemplate || existingAiConfig.selectedPromptTemplate || "",
        selectedUseCases: Array.isArray(selectedUseCases) ? selectedUseCases : (existingAiConfig.selectedUseCases || []),