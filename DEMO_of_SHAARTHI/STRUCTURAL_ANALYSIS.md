# Saarthi HTML - Structural Analysis for React Refactoring

## 1. PAGES IDENTIFIED (id="page-*")

| Page ID | Purpose | Status | Components |
|---------|---------|--------|------------|
| `page-landing` | Hero homepage with intro | Line 1290 | Logo, CTA buttons, feature highlights |
| `page-modes-grid` | User mode selection cards | Line 1375 | 4 Mode cards (Amma, Business, Senior, Student) |
| `page-auth` | Login/Register/OTP flow | Line 1531 | Auth tabs, form fields, OTP input |
| `page-onboarding` | Post-auth personality quiz | Line 1649 | 5-step questionnaire with radio options |
| `page-modes-panel` | Authenticated mode switcher | Line 1674 | Dashboard mode cards with lock indicators |
| `page-dashboard` | Main application workspace | Line 1716 | Sidebar menu + dynamic feature container |

**Navigation Flow:**
```
Landing → Mode Selection → Auth (Login/Register/OTP) → Onboarding → Mode Selection Panel → Dashboard
```

---

## 2. COMPONENTS (Reusable UI Elements)

### A. Mode Cards (4 Distinct User Personas)
```html
<div class="mode-card {persona}" onclick="selectModeOnCard('{modeKey}')">
```
- **Amma Mode** (Homemakers): Orange/gold palette, recipe & grocery focus
- **Business Mode** (Entrepreneurs): Indigo/teal palette, marketing & analytics
- **Senior Mode** (Elderly): Teal/calm palette, safety & large buttons
- **Student Mode** (Academics): Purple/indigo palette, study & resume tools

### B. Dashboard Components
- **Sidebar Profile**: Avatar + Name + Role + Mode Menu
- **Feature Tabs**: Dynamic tab system switching between features
- **Form Groups**: Input fields with labels and validation
- **Action Buttons**: Primary CTAs with icons
- **Toast Notifications**: Floating alerts with emoji icons
- **Response Boxes**: Dynamic output containers for API results

### C. Cards & Containers
```css
.card { border-radius: 24px; box-shadow: var(--theme-shadow); }
.btn-royal { gradient gold background, shadow on hover }
.input { 2px border, focus blue shadow }
```

### D. Developer Console
- SQL Query Log Panel
- API Request/Response Log Panel
- Database Table Viewer

---

## 3. FEATURES/MODES - User-Specific Functionality

### Amma Mode (Homemakers) - Orange Theme (#F4A300)
**Menu Items:**
1. **Recipe Creator AI** (`id="recipe"`)
   - Input: Ingredients list + Language
   - Output: Recipe name, steps, nutrition, voice_msg
   - API Function: `triggerGenerateRecipeAPI()`

2. **Grocery Planner AI** (`id="grocery"`)
   - Features: Add items, quantity tracking, estimated cost
   - API Functions: `addGroceryItemMock()`, `triggerOptimizeGroceryAPI()`
   - Storage: `SaarthiDB.grocery_lists`

3. **Family Reminders** (`id="reminders"`)
   - Types: Medicine, Bill, Event
   - API Function: `triggerCreateReminderAPI()`
   - Storage: `SaarthiDB.family_reminders`

4. **Scam Safety Check** (`id="safety"`)
   - Upload scam screenshot
   - Fraud score analysis
   - API Function: `triggerAnalyzeScamAPI()`

5. **Digital Payments School** (`id="academy"`)
   - Educational quiz
   - API Function: `triggerAcademyQuiz()`

### Business Mode (Entrepreneurs) - Indigo Theme (#1E1F57)
**Menu Items:**
1. **Marketing Ad Writer** (`id="marketing"`)
   - Generate WhatsApp campaign copy
   - API Function: `triggerMarketingGenAPI()`

2. **Sales & Reach Analytics** (`id="analytics"`)
   - Real-time metrics (sales, visitors, conversion rate)
   - Storage: `SaarthiDB.business_analytics`

3. **WhatsApp Customer AI** (`id="whatsapp"`)
   - Generate customer responses
   - API Function: `triggerWhatsAppReplyAPI()`

4. **Retail GST Bill Maker** (`id="invoice"`)
   - Invoice generation
   - API Function: `triggerCreateInvoiceAPI()`

### Senior Mode (Elderly) - Teal Theme (#7FB7BE)
**Menu Items:**
1. **Safe Banking Guide** (`id="bank"`)
   - Banking safety info + OTP protection
   - API Function: `triggerBankingSafetyAPI()`

2. **Family SOS Dialer** (`id="emergency"`)
   - Emergency contact list
   - API Function: `triggerEmergencySOSAPI()`

3. **Video Call Interactive Tutor** (`id="video"`)
   - Video tutorial playback
   - API Function: `triggerVideoTutorialAPI()`

4. **Med Time Reminders** (`id="medicine"`)
   - Medicine schedule tracking
   - API Function: `triggerMedicineReminderAPI()`

### Student Mode (Academics) - Purple Theme (#4F46E5)
**Menu Items:**
1. **Study Revision Notes** (`id="study"`)
   - Topic-based notes generation
   - API Function: `triggerStudyNotesAPI()`

2. **Resume Builder** (`id="resume"`)
   - ATS-optimized resume creation
   - API Function: `triggerResumeAPI()`

3. **Hackathon Blueprints** (`id="hackathon"`)
   - Project templates
   - API Function: `triggerHackathonAPI()`

4. **Pomodoro Study Clock** (`id="productivity"`)
   - Timer-based productivity tool

---

## 4. AUTHENTICATION SYSTEM

### Flow Architecture:
```
submitPageLogin() → Email/Phone + Password
                 → User lookup or auto-create
                 → JWT token generation (mock)
                 → Session storage
                 → Mode unlock or mode selection

submitPageRegister() → Name + Phone + Email + Password + Language
                    → OTP generation
                    → OTP verification via triggerPageLoginWithOtp()
                    → User creation + auto-login

triggerPageLoginWithOtp() → Verify 6-digit OTP
                         → Auto-advance to dashboard
```

### Key Functions:
- **`submitPageLogin()`** - Line 2266: Email/phone + password authentication
- **`submitPageRegister()`** - Line 2332: Full registration with OTP
- **`triggerPageLoginWithOtp()`** - Line 2460: OTP verification
- **`focusNextAuthOtp()`** - Line 2378: Auto-advance through OTP fields
- **`updateNavbarAuthUI()`** - Line 2065: Show/hide auth section based on session

### Session State:
```javascript
let currentUserId = localStorage.getItem('saarthi_current_user_id') || null;
let userLockedMode = localStorage.getItem('saarthi_locked_mode') || null;
```

### Data Stored:
- `saarthi_users`: User profiles
- `saarthi_sessions`: JWT tokens + device info
- `saarthi_current_user_id`: Active session
- `saarthi_locked_mode`: Persisted mode

---

## 5. JAVASCRIPT FUNCTIONS (Starting Line 1833)

### Navigation & State Management:
| Function | Line | Purpose |
|----------|------|---------|
| `updateNavbarAuthUI()` | 2065 | Render auth section based on session |
| `showLandingPage()` | 2098 | Display landing section |
| `showDashboardModesPanel()` | 2104 | Show mode selection after auth |
| `selectModeOnCard()` | 2211 | Handle mode selection |
| `hideAllPages()` | 2225 | Hide all page sections |
| `showAuthPage()` | 2237 | Show auth modal with tab selection |
| `switchAuthPageTab()` | 2244 | Switch between login/register/OTP |
| `launchDashboardMode()` | 2651 | Initialize dashboard with mode |
| `switchDashboardTab()` | 2707 | Switch feature tabs in dashboard |

### Onboarding & Mode Management:
| Function | Line | Purpose |
|----------|------|---------|
| `startOnboarding()` | 2550 | Initialize questionnaire |
| `renderOnboardingQuestion()` | 2558 | Display Q&A |
| `selectOnboardingOption()` | 2594 | Store selected answer |
| `nextOnboardingStep()` | 2606 | Advance questionnaire |
| `saveOnboardingAnswers()` | 2622 | Persist to DB |
| `lockUserMode()` | 2484 | Pin user to single mode |
| `unlockUserMode()` | 2510 | Allow mode switching |

### Feature Tab Content Rendering:
| Function | Line | Purpose |
|----------|------|---------|
| `renderFeatureTabContent()` | 2730 | Dynamically load feature UI |

### API Trigger Functions (Mock):
| Function | Line | Mode | Feature |
|----------|------|------|---------|
| `triggerGenerateRecipeAPI()` | 3204 | Amma | Recipe generation |
| `triggerOptimizeGroceryAPI()` | 3324 | Amma | Budget optimization |
| `triggerCreateReminderAPI()` | 3363 | Amma | Create family reminder |
| `triggerAnalyzeScamAPI()` | 3441 | Amma | Scam detection |
| `triggerAcademyQuiz()` | 3499 | Amma | Financial literacy quiz |
| `triggerMarketingGenAPI()` | 3542 | Business | Ad copy generation |
| `triggerWhatsAppReplyAPI()` | 3587 | Business | Customer response AI |
| `triggerCreateInvoiceAPI()` | 3610 | Business | Bill generation |
| `triggerBankingSafetyAPI()` | 3675 | Senior | Safety guidelines |
| `triggerEmergencySOSAPI()` | 3700 | Senior | Emergency contact dialer |
| `triggerVideoTutorialAPI()` | 3713 | Senior | Video playback |
| `triggerMedicineReminderAPI()` | 3721 | Senior | Med schedule |
| `triggerStudyNotesAPI()` | 3783 | Student | Notes generation |
| `triggerResumeAPI()` | 3821 | Student | Resume builder |
| `triggerHackathonAPI()` | 3847 | Student | Project templates |

### Utility Functions:
| Function | Purpose |
|----------|---------|
| `showToast()` | Display toast notifications |
| `speakMockText()` | Text-to-speech voice output |
| `toggleVoiceSpeechCompanion()` | Toggle voice input overlay |
| `hexToRgb()` | Color conversion utility |
| `renderDBConsoleTable()` | DB inspector table rendering |

### Data Manipulation:
- `addGroceryItemMock()` - Add grocery items
- `deleteGroceryItem()` - Remove items
- `renderGroceryListRows()` - Render grocery UI
- `deleteReminderMock()` - Remove reminders
- `renderRemindersRows()` - Render reminder list
- `selectScamSample()` - Select scam screenshot
- `answerQuiz()` - Quiz response handler
- `deleteMedReminderMock()` - Delete medicine reminder

---

## 6. STYLES - CSS VARIABLES & MAJOR SECTIONS

### CSS Variables (Lines 10-34):
```css
:root {
  /* Color Palette */
  --royal-indigo:        #1E1F57;
  --royal-indigo-deep:   #13144A;
  --royal-indigo-mid:    #2B2D80;
  --imperial-gold:       #D4AF37;
  --imperial-gold-lt:    #E8C84A;
  --imperial-gold-glow:  rgba(212,175,55,0.3);
  --pearl-ivory:         #FFFDF9;
  --warm-ivory:          #FFF8EE;
  
  /* Dynamic Theme Variables */
  --theme-primary:       var(--royal-indigo);
  --theme-secondary:     var(--imperial-gold);
  --theme-accent:        var(--royal-indigo-mid);
  --theme-bg:            var(--pearl-ivory);
  --theme-card-bg:       #ffffff;
  --theme-border:        rgba(212,175,55,0.25);
  --theme-text:          #1a1a3e;
  --theme-shadow:        0 20px 48px rgba(30,31,87,0.1);
}
```

### Animation Keyframes (Lines 154-189):
- `rotate-slow` - 25s rotation
- `rotate-reverse` - 20s reverse rotation
- `breathe` - Pulsing scale + glow effect
- `wave` - Audio wave animation
- `pulse-ring` - Expanding ring effect
- `float` - Vertical floating
- `slideInUp` - Bottom-to-top slide
- `slideInRight` - Right-to-left slide
- `fadeIn` - Opacity fade

### Major CSS Sections:
| Section | Lines | Purpose |
|---------|-------|---------|
| Royal Design System & Variables | 10-34 | Core color + theme props |
| Reset & Common Styles | 36-45 | Box-sizing, fonts, transitions |
| Mandala Watermark | 47-55 | Background patterns |
| Utility Classes | 57-72 | Flex, grid, spacing helpers |
| Typography | 74-82 | Font families + gradients |
| Buttons | 83-115 | .btn, .btn-royal, .btn-outline |
| Premium Cards | 117-131 | .card hover effects |
| Inputs | 133-149 | .input focus states |
| Keyframe Animations | 154-197 | Animation definitions |
| Splash Screen | 200+ | Intro animation |
| Navigation Bar | Multiple | Logo + nav links + auth |
| Dashboard Layout | Multiple | Sidebar + main content |
| Responsive Design | @media | 1024px, 768px breakpoints |

### Responsive Breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

---

## 7. DATA/API CALLS - Backend Integration Pattern

### SaarthiDB State Engine (Line 1837)
Mock in-memory database persisted to localStorage:

```javascript
const SaarthiDB = {
  // Core Tables
  users: [],                        // User profiles
  user_sessions: [],                // JWT + device info
  user_preferences: [],             // User settings
  onboarding_answers: [],           // Questionnaire responses
  
  // Mode-Specific Data
  amma_recipe_history: [],          // Recipes
  grocery_lists: [],                // Grocery items
  family_reminders: [],             // Reminders
  scam_reports: [],                 // Scam submissions
  
  // Business Mode Data
  marketing_campaigns: [],          // Ad campaigns
  business_analytics: [],           // Sales metrics
  
  // Senior Mode Data
  emergency_contacts: [],           // SOS contacts
  
  // Student Mode Data
  study_materials: [],              // Notes
  productivity_tasks: [],           // Tasks
  
  // Methods
  logSql(query),                    // Log SQL to console
  logApi(method, endpoint, ...),    // Log API calls
  save()                            // Persist to localStorage
}
```

### API Call Pattern:
All API functions follow this pattern:
```javascript
function triggerXXXAPI() {
  // 1. Get form inputs
  const inputs = { field1: value1, field2: value2 };
  
  // 2. Validate
  if (!inputs.field1) { showToast('⚠️', 'msg'); return; }
  
  // 3. Show loading
  showToast('🔄', 'Processing...');
  
  // 4. Simulate async delay
  setTimeout(() => {
    // 5. Generate mock response
    const resBody = { /* generated data */ };
    
    // 6. Save to SaarthiDB
    SaarthiDB.table.push({ id, user_id, ...data });
    SaarthiDB.save();
    
    // 7. Log to dev console
    SaarthiDB.logSql(`INSERT INTO table...`);
    SaarthiDB.logApi('POST', '/api/...', inputs, 200, resBody);
    
    // 8. Update UI
    document.getElementById('response-box').innerHTML = `/* rendered output */`;
    
    // 9. Trigger voice output
    speakMockText(resBody.voice_msg);
  }, 1400);
}
```

### Data Flow:
```
User Input (Form) 
  ↓
Validation
  ↓
API Trigger Function
  ↓
Mock Response Generation
  ↓
SaarthiDB.save() → localStorage
  ↓
Dev Console Logging
  ↓
UI Update + Voice Output
```

### localStorage Keys:
```
saarthi_users              → User profiles
saarthi_sessions           → Session tokens
saarthi_current_user_id    → Active user
saarthi_active_mode        → Current mode
saarthi_locked_mode        → Pinned mode
saarthi_prefs              → User preferences
saarthi_onboarding         → Quiz responses
saarthi_recipes            → Recipe history
saarthi_groceries          → Grocery lists
saarthi_reminders          → Family reminders
saarthi_scams              → Scam reports
saarthi_marketing          → Marketing campaigns
saarthi_analytics          → Business analytics
saarthi_contacts           → Emergency contacts
saarthi_study              → Study materials
saarthi_tasks              → Productivity tasks
```

### Response Format Pattern:
```javascript
{
  id: 'resource_id',
  user_id: 'current_user',
  // Mode-specific fields
  recipe_name: '...',
  steps: ['step 1', 'step 2'],
  nutrition: { Calories: 320, ... },
  voice_msg: 'Audio output text',
  created_at: ISO_TIMESTAMP,
  ...
}
```

---

## 8. RECOMMENDED REACT PROJECT STRUCTURE

```
src/
├── components/
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── AuthPage.jsx
│   │   ├── OnboardingPage.jsx
│   │   ├── ModeSelectionPage.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── shared/
│   │   ├── Toast.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── FormInput.jsx
│   │   ├── ModeCard.jsx
│   │   ├── NavBar.jsx
│   │   └── DevConsole.jsx
│   │
│   ├── modes/
│   │   ├── AmmaMode.jsx
│   │   │   ├── RecipeTab.jsx
│   │   │   ├── GroceryTab.jsx
│   │   │   ├── RemindersTab.jsx
│   │   │   ├── SafetyTab.jsx
│   │   │   └── AcademyTab.jsx
│   │   ├── BusinessMode.jsx
│   │   ├── SeniorMode.jsx
│   │   └── StudentMode.jsx
│   │
│   └── dashboard/
│       ├── DashboardSidebar.jsx
│       ├── DashboardHeader.jsx
│       └── FeatureContainer.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useSaarthiDB.js
│   ├── useToast.js
│   └── useVoice.js
│
├── context/
│   ├── AuthContext.jsx
│   ├── ModeContext.jsx
│   ├── DataContext.jsx
│   └── ThemeContext.jsx
│
├── services/
│   ├── api.js (API simulation layer)
│   ├── auth.js
│   ├── storage.js
│   ├── voice.js
│   └── {modeName}Service.js (per-mode services)
│
├── styles/
│   ├── variables.css
│   ├── animations.css
│   ├── components.css
│   └── responsive.css
│
├── utils/
│   ├── colors.js
│   ├── validators.js
│   └── formatters.js
│
├── App.jsx
└── index.js
```

---

## 9. KEY INSIGHTS FOR REFACTORING

1. **State Management**: Replace localStorage + global variables with Context API or Redux
2. **Component Hierarchy**: Extract 4 mode variations into ConfigMap + shared components
3. **API Layer**: Create abstraction layer for mock → real API transition
4. **Theme System**: Leverage CSS variables via ThemeContext
5. **Forms**: Extract form logic into custom hook for validation/submission
6. **Voice Feature**: Isolate Web Speech API into custom hook
7. **Data Persistence**: Abstract localStorage into custom storage service
8. **Animations**: Keep CSS keyframes, use React Spring if needed for interactive animations
9. **Dev Console**: Extract into separate debug component with log capture
10. **Responsive**: Use Tailwind or CSS Grid for layout flexibility

---

## 10. MIGRATION CHECKLIST

- [ ] Setup React + TypeScript project
- [ ] Create context providers (Auth, Mode, Data, Theme)
- [ ] Extract custom hooks (useAuth, useSaarthiDB, useToast, useVoice)
- [ ] Build shared UI component library
- [ ] Implement authentication flow
- [ ] Create mode-specific feature components
- [ ] Build dashboard layout
- [ ] Migrate API simulation layer
- [ ] Setup localStorage abstraction
- [ ] Implement voice synthesis integration
- [ ] Add responsive breakpoints
- [ ] Create dev console debug component
- [ ] Setup testing infrastructure
- [ ] Deploy to production

---

**Generated**: 2026-06-20 | **File**: `/c/Users/Dell/Desktop/PROJECTS/DEMO_of_SHAARTHI/saarthi.html` (4088 lines)
