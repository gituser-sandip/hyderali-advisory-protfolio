---
name: "Hyderali Advisory Portfolio - Agent Instructions"
---

# Hyderali Advisory Portfolio - Agent Instructions

These instructions apply to all agents working on this project, reinforcing s-agent's iterative learning philosophy across the workspace.

## Project Context

This is a React + TypeScript + Vite portfolio website for Hyderali Advisory. The codebase emphasizes:
- Type safety and modern React patterns
- Accessibility and responsive design
- Performance optimization
- Comprehensive test coverage

## Learning-First Development

### Core Philosophy
Every task is an opportunity to learn. When working on this codebase:

1. **Understand before acting**: Read the component/function first, understand its context and dependencies
2. **Plan incrementally**: Break complex tasks into testable steps
3. **Validate each step**: Run tests, check console for errors, verify visually if UI-related
4. **Reflect on results**: If something fails, analyze why and adjust your approach
5. **Document learnings**: Leave comments explaining non-obvious decisions

### When Mistakes Happen
- Acknowledge what went wrong clearly
- Analyze the root cause (not just the symptom)
- Adjust your approach based on the analysis
- Try again with the updated understanding
- Note the lesson for future reference

## Code Organization

```
src/
├── components/      # React components (one per file)
├── utils/          # Utility functions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
public/images/      # Static assets
```

### Component Patterns
- **Location**: `src/components/ComponentName.tsx`
- **Tests**: `src/components/ComponentName.test.tsx` (same directory)
- **Props**: Always typed with TypeScript interfaces
- **Export**: Named + default export at file end
- **Size**: Keep under 300 lines; split if larger

## Development Workflow

### Before Making Changes
1. Read the existing code structure
2. Check related components and utilities
3. Look at how similar patterns are implemented elsewhere
4. Understand the data flow and dependencies

### When Making Changes
1. Create a clear plan (even if just mental, state it)
2. Make small, focused changes
3. Test incrementally (don't wait until the end)
4. Check for regressions (did you break something else?)
5. Verify in browser if UI-related

### After Changes
1. Run tests: `npm test`
2. Check types: `npm run type-check` (if available)
3. Review diff: Make sure changes are intentional
4. Leave comments explaining *why* you made the change

## Type Safety

- **No `any` types** — use `unknown` and narrow types instead
- **Export prop types** alongside components
- **Use unions for enums**: `type Status = 'idle' | 'loading' | 'done'`
- **Generic constraints**: If using generics, constrain them appropriately

## React Patterns

### Hooks
- ✅ Use functional components with hooks
- ✅ Always include dependency arrays in `useEffect`
- ✅ Memoize callbacks passed to memoized children with `useCallback`
- ❌ Don't conditionally call hooks
- ❌ Don't call hooks from regular functions

### State Management
- Keep state as close as possible to where it's used
- Lift state only if multiple components need it
- Use Context for deeply nested data (not for everything)
- Consider custom hooks for reusable state logic

### Performance
- Use `React.memo()` for components that receive many stable props
- Use `useMemo` for expensive computations (not as a default optimization)
- Avoid prop drilling; use composition or Context instead
- Profile with React DevTools before optimizing

## Testing Requirements

- **Coverage target**: 80%+ across all metrics
- **Every component** should have tests
- **Every utility** should have tests
- **Test behavior, not implementation**: "Should render success state" not "Should call setState"
- **Mock boundaries**: Mock APIs and external services, not internal functions

### Test File Location
- Component: `src/components/Hero.test.tsx`
- Utility: `src/utils/cn.test.ts`

## Accessibility (a11y)

- Use semantic HTML: `<button>`, `<nav>`, `<main>`, `<article>`, etc.
- Include `alt` text on all images
- Ensure color contrast meets WCAG AA standards (4.5:1 for normal text)
- Test keyboard navigation: Tab, Enter, Esc, Arrow keys should work
- Use ARIA labels when semantic HTML isn't sufficient

## Git & Commits

- **Commit messages**: Describe *what* and *why*, not *how*
  - ✅ "Fix Hero animation timing in Safari (use requestAnimationFrame)"
  - ❌ "Fix bug"
- **Atomic commits**: Each commit is a logical unit of work
- **Hooks run before commit**: Type checking and linting happen automatically

## Common Tasks

### Adding a New Component
1. Create `src/components/ComponentName.tsx`
2. Define props interface: `interface ComponentNameProps { ... }`
3. Write the component
4. Create `src/components/ComponentName.test.tsx` with tests
5. Import and use in `App.tsx` or parent component

### Fixing a Bug
1. Locate the bug (which component/utility)
2. Read the code to understand the issue
3. Write a test that demonstrates the bug (test should fail)
4. Fix the code (test should now pass)
5. Check for related issues elsewhere

### Adding a Feature
1. Plan what components/utilities are needed
2. Create types/interfaces first
3. Implement components one at a time
4. Test each component
5. Integrate into App.tsx
6. Test the full feature end-to-end

## Tool Usage

- **Search**: Use `grep_search` to find files or patterns quickly
- **Read**: Read files to understand context before making changes
- **Edit**: Make targeted edits, not massive rewrites
- **Execute**: Run `npm` commands to test, lint, type-check
- **Agent**: Use s-agent for complex tasks, Explore agent for codebase navigation

## Performance Guidelines

- Keep initial bundle size small (lazy-load large components)
- Optimize images (use WebP with JPEG fallback)
- Avoid blocking main thread (move heavy work to Web Workers if possible)
- Monitor Lighthouse scores (aim for 90+)

## When to Ask for Help

- Unclear architecture or design patterns
- Dependencies between components are complex
- Performance issues that need profiling
- Accessibility requirements you're unsure about
- Test strategy for complex scenarios

## Learning Resources (In This Codebase)

- Look at existing components for patterns: `src/components/` has good examples
- Check tests for testing patterns: `*.test.tsx` files
- Read utility code to understand data transformations: `src/utils/`
- Review comments for non-obvious decisions

---

**Remember**: Every error is a learning opportunity. When something breaks, understand why, fix it, and apply that knowledge to prevent similar issues in the future.
