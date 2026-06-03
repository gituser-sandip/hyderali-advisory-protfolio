---
name: "Test File Best Practices"
description: "Use when: writing or editing test files (.test.ts, .test.tsx, .spec.ts). Ensures consistent testing patterns, good coverage, and maintainable tests."
applyTo: "**/*.test.{ts,tsx},**/*.spec.{ts,tsx}"
---

# Test File Best Practices

## Test Structure & Organization

### File Location & Naming
- Test files live **in the same directory** as the code being tested
- Naming convention: `ComponentName.test.tsx` or `functionName.test.ts`
- Group related tests using `describe()` blocks
- One file per component/function (avoid god test files)

```typescript
// ✅ Good structure
src/
  components/
    Button.tsx
    Button.test.tsx
  utils/
    formatDate.ts
    formatDate.test.ts
```

### Test Block Organization
```typescript
describe('Button Component', () => {
  describe('rendering', () => {
    it('should render with correct label', () => { });
    it('should apply className when provided', () => { });
  });

  describe('interactions', () => {
    it('should call onClick handler on click', () => { });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', () => { });
  });
});
```

## Writing Good Tests

### Test Naming (Behavior-Driven)
- Use **"should..."** pattern: `it('should render error message when email is invalid', ...)`
- Describe the behavior, not the implementation: ✅ "renders success state" vs ❌ "calls setState"
- Be specific about conditions: ✅ "submits form when valid" vs ❌ "submits form"

### Test Content (Arrange-Act-Assert)
```typescript
it('should disable button when loading', () => {
  // Arrange
  const { getByRole } = render(<Button isLoading />);
  
  // Act
  const button = getByRole('button');
  
  // Assert
  expect(button).toBeDisabled();
});
```

### What to Test
✅ **User-facing behavior**: Click handlers, form submissions, visible state changes
✅ **Error handling**: Invalid inputs, failed API calls, edge cases
✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
✅ **Integration**: Components working together, data flow

❌ **Implementation details**: Internal state variables, function call counts (unless critical)
❌ **Third-party library behavior**: Don't test React itself, test your usage of it
❌ **Trivial getters/setters**: Skip tests for simple props that just render

## Mocking & Fixtures

### Mocking External Dependencies
```typescript
// ✅ Good: Mock at module level
jest.mock('../api/userService');

describe('UserProfile', () => {
  beforeEach(() => {
    userService.getUser.mockResolvedValue({ id: 1, name: 'John' });
  });
});
```

### Test Data Fixtures
- Create `__fixtures__/` folder for mock data
- Keep fixtures small and focused
- Name clearly: `validUser.json`, `errorResponse.json`

### Avoiding Over-Mocking
- Mock external APIs and services, not internal functions
- Mock at the module boundary, not deep within components
- Use real implementations for logic you own

## Coverage & Completeness

### Target Coverage
- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

### High-Priority Tests
1. **Happy path**: Normal, expected behavior
2. **Error paths**: Invalid inputs, failures
3. **Edge cases**: Empty lists, null values, boundary conditions
4. **User interactions**: Click, form submission, keyboard

### Low-Priority (Can Skip)
- Component rendering with every prop combination
- 3rd-party library integration (trust the library)
- Code that's unreachable or logically impossible

## Async & Timing

### Async Operations
```typescript
// ✅ Good: Wait for async behavior
it('should load and display user data', async () => {
  render(<UserProfile userId="1" />);
  
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
});
```

### Avoiding Timing Issues
- Use `findBy` (waits) instead of `getBy` for async elements
- Use `waitFor` for complex async scenarios
- Avoid `setTimeout` and arbitrary `act()` calls
- Prefer testing actual user interactions over implementation timing

## Common Test Anti-Patterns

❌ **Testing implementation, not behavior**: "Expect setState was called" instead of "Expect button is disabled"
❌ **Massive test files**: Keep under 500 lines; split into multiple describe blocks
❌ **Shared test state**: Use `beforeEach` to reset state for each test
❌ **Over-mocking**: Mocking everything makes tests brittle and slow
❌ **Brittle selectors**: Use semantic queries (`getByRole`) instead of CSS selectors
❌ **Ignored or skipped tests**: If a test is `.skip` or `.todo`, create an issue to track it
❌ **No negative tests**: Test both success AND failure cases

## Testing React Hooks & Context

### Testing Custom Hooks
```typescript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

it('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```

### Testing Context Consumers
Wrap test components in a context provider if they consume Context.

## Performance & Best Practices

- **Keep tests fast**: Each test < 100ms ideally
- **Isolate tests**: No test should depend on another test's side effects
- **Cleanup**: Tests clean up automatically; use `screen.cleanup()` if needed
- **Snapshot testing**: Use sparingly; good for styles, bad for logic
