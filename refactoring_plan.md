# Refactoring Plan: MVC Architecture for React

To improve maintainability and scalability, we will refactor the current folder structure into a pattern that follows the principles of MVC (Model-View-Controller) adapted for React.

## Proposed Structure

```text
src/
├── api/             # [MODEL] API services, data fetching logic
├── components/      # [VIEW] Reusable, shared UI components
│   ├── common/      # Generic elements (Button, Input, Modal)
│   └── layout/      # Layout elements (Header, Footer, Container)
├── features/        # [VIEW + CONTROLLER] Feature-based modules
│   └── home/        # Components and hooks specific to the Home feature
├── hooks/           # [CONTROLLER] Shared custom hooks for business logic
├── pages/           # [VIEW] Routing entry points (Pages)
├── routes/          # Navigation and route configuration
├── styles/          # Global styles, variables, themes
├── utils/           # Utility functions (date formatting, etc.)
└── constants/       # Static data, configuration, enum-like constants
```

## Mapping to MVC

| Pattern | React Equivalent | Folder |
| :--- | :--- | :--- |
| **Model** | Data, State, API | `api/`, `context/`, `store/` |
| **View** | UI Components | `components/`, `features/`, `pages/` |
| **Controller** | Logic, Handlers | `hooks/`, `features/*/hooks/` |

## Refactoring Steps

1. **Setup Directories**: Create the missing base directories (`api`, `hooks`, `features`, `routes`, `utils`, `constants`).
2. **Move Layout Components**: Move `src/components/layout` to `src/components/layout`. (Keep it there but organize better).
3. **Migrate Home Feature**: 
    - Move `src/components/home/*` to `src/features/home/components/*`.
    - Extract any logic from these components into `src/features/home/hooks/`.
4. **Organize Styles**: Move component-specific styles into their respective component folders.
5. **Update Imports**: Fix all imports in `App.jsx`, `pages/Home.jsx`, etc.
6. **Centralize Config**: Move static data (like service lists) from components into `src/constants/`.

## Benefits
- **Separation of Concerns**: Logic is separated from UI.
- **Scalability**: New features can be added in `features/` without cluttering `components/`.
- **Reusability**: Shared components and hooks are easily accessible.
- **Maintainability**: Clear where to find data, logic, or UI styling.
