// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initialize the tree if data is available
    if (Object.keys(familyData).length > 0) {
        // Check if we're on the homepage
        const generation1Container = document.getElementById('generation-1');
        if (generation1Container) {
            initializeTree();

            // Load all generations automatically
            const maxGenerations = 7;
            for (let i = 2; i <= maxGenerations; i++) {
                if (familyData[`generation${i}`]) {
                    // Create sections for each generation
                    const sectionEl = document.createElement('section');
                    sectionEl.className = 'tree-container';
                    
                    const headingEl = document.createElement('h2');
                    headingEl.textContent = `Generation ${i}`;
                    sectionEl.appendChild(headingEl);
                    
                    const genContainerEl = document.createElement('div');
                    genContainerEl.id = `generation-${i}`;
                    genContainerEl.className = `generation gen-${i}`;
                    genContainerEl.innerHTML = '<div class="loading">Loading...</div>';
                    sectionEl.appendChild(genContainerEl);
                    
                    document.querySelector('main').appendChild(sectionEl);
                    loadGeneration(i);
                }
            }
        }        // Check if we need to initialize a specific generation view
        const urlParams = new URLSearchParams(window.location.search);
        const showGeneration = urlParams.get('generation');
        if (showGeneration) {
            loadGeneration(parseInt(showGeneration));
        }
    }
});

// Function to initialize the family tree
function initializeTree() {
    // Clear any loading messages
    const generation1Container = document.getElementById('generation-1');
    generation1Container.innerHTML = '';

    // Get first generation data
    const gen1Data = familyData.generation1;
    
    // If we have data for generation 1
    if (gen1Data) {
        const founderKey = Object.keys(gen1Data)[0];
        const founder = gen1Data[founderKey];
        
        // Create founder element
        const founderElement = createPersonElement(founder);
        generation1Container.appendChild(founderElement);
        
        // Create children container for second generation
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container';
        generation1Container.appendChild(childrenContainer);
        
        // Add second generation (children of founder)
        if (founder.children && founder.children.length > 0) {
            const gen2Data = familyData.generation2;
            
            founder.children.forEach(childId => {
                if (gen2Data[childId]) {
                    const childElement = createPersonElement(gen2Data[childId]);
                    childrenContainer.appendChild(childElement);
                }
            });
        }
    }
}

// Function to create a person element
function createPersonElement(person) {
    const personElement = document.createElement('div');
    personElement.className = `person ${person.gender}`;
    personElement.setAttribute('data-id', person.id);
    
    // Create HTML content for person
    let personContent = `
        <h4>${person.displayName || person.name}</h4>
    `;
    
    // Add haaji designation if applicable
    if (person.isHaaji) {
        personContent += `
            <p class="haaji-designation"><i class="fas fa-mosque"></i> Haaji Sahab</p>
        `;
    }
    
    // Add birth/death dates if available
    if (person.birth || person.death) {
        personContent += `
            <p class="dates">${person.birth || '?'} - ${person.death || 'Present'}</p>
        `;
    }
    
    // Add spouse info if exists
    if (person.spouse) {
        personContent += `
            <div class="spouse">
                <p>Spouse: ${person.spouse.name}</p>
                ${person.spouse.birth || person.spouse.death ? 
                  `<p class="dates">${person.spouse.birth || '?'} - ${person.spouse.death || 'Present'}</p>` : ''}
            </div>
        `;
    }
    
    personElement.innerHTML = personContent;
    
    // Add click event to navigate to person's page
    personElement.addEventListener('click', function() {
        navigateToPerson(person.id);
    });
    
    return personElement;
}

// Function to navigate to a person's page
function navigateToPerson(personId) {
    // Find which generation this person belongs to
    let generation = '';
    let personData = null;
    
    for (const gen in familyData) {
        if (familyData[gen][personId]) {
            generation = gen;
            personData = familyData[gen][personId];
            break;
        }
    }
    
    if (generation && personData) {
        // Navigate to the person's page
        window.location.href = `pages/person.html?id=${personId}&gen=${generation}`;
    }
}

// Function to load a specific generation
function loadGeneration(genNumber) {
    const generationContainer = document.getElementById(`generation-${genNumber}`);
    if (!generationContainer) return;
    
    generationContainer.innerHTML = '';
    
    const genData = familyData[`generation${genNumber}`];
    if (!genData) return;
    
    // Group people by their parent
    const peopleByParent = {};
    
    for (const personId in genData) {
        const person = genData[personId];
        const parentId = person.parent;
        
        if (!peopleByParent[parentId]) {
            peopleByParent[parentId] = [];
        }
        
        peopleByParent[parentId].push(person);
    }
    
    // Create family groups
    for (const parentId in peopleByParent) {
        const familyGroup = document.createElement('div');
        familyGroup.className = 'family-group';
        
        // Find parent's name
        let parentName = "Unknown";
        for (const gen in familyData) {
            if (familyData[gen][parentId]) {
                parentName = familyData[gen][parentId].displayName || familyData[gen][parentId].name;
                break;
            }
        }
        
        // Add family group header
        const groupHeader = document.createElement('h3');
        groupHeader.className = 'family-group-header';
        groupHeader.textContent = `Children of ${parentName}`;
        familyGroup.appendChild(groupHeader);
        
        // Add children container
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container';
        
        // Add each child
        peopleByParent[parentId].forEach(person => {
            const personElement = createPersonElement(person);
            childrenContainer.appendChild(personElement);
        });
        
        familyGroup.appendChild(childrenContainer);
        generationContainer.appendChild(familyGroup);
    }
    
    // No need to add buttons for next generations as they're all loaded automatically
}

// Function to create a new person page dynamically
function createPersonPage(personId, generation) {
    // This would be called from the person.html page
    // It would fetch the person data and render their family tree
}

// Find a person across all generations
function findPerson(personId) {
    for (const gen in familyData) {
        if (familyData[gen][personId]) {
            return {
                generation: gen,
                person: familyData[gen][personId]
            };
        }
    }
    return null;
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    
    // Check for saved theme preference or use device preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the appropriate theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Add click handler
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggleBtn.classList.add('theme-toggle-animation');
        
        // Update icon and save preference
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
        
        // Remove animation class after animation completes
        setTimeout(() => {
            themeToggleBtn.classList.remove('theme-toggle-animation');
        }, 500);
    });
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
});