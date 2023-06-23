There are two big groups when implementing an UI

- Layout or block elements
- Text or inline elements

We must apply the separation of concerns paradigm and try to not mix the responsabilities of each component.

For example this:

```tsx
<div className="mb-14">
  <p className="text-center font-bold">Some text</p>
</div>
```

Is vissually the same as this:

```tsx
<p className="mb-14 text-center font-bold">Some text</p>
```

The first one is the correct because we are asigning the correct responsability to the correct element.

This is not a universal law, but it's a pattern that helps avoid many potential errors when we are creating components in React, especially when using Tailwind.

The less tailwind classes applied to a component, the less chances to generate a class conflict with the classes applied _inside_ the component.

```tsx
const Text = ({ className, title, ...props }) => (
  <p {...props} className={`mb-14 text-center font-bold ${className}`}>
    {title}
  </p>
);
```

If we try to apply those 3 classes but with another variant we are generating class conflicts, for example:

```tsx
<Text className="mb-10 text-left font-light">Some text</Text>
```
