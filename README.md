# Flowers

A small Angular application listing flowers for sale, with a search box that
filters the list as the user types. Built while learning Angular component
fundamentals.

## Features

- Product list rendered from a component array with `*ngFor`.
- Live search filtering by name.
- Availability handling: available products show a "Buy Now" button, unavailable
  ones fall back to a "Notify me" template via `*ngIf` / `else`.
- Dismissible cookie notification component.
- Header and navigation components.

## Tech stack

Angular 15, TypeScript, Bootstrap.

## What it demonstrates

The search box shows parent and child component communication. `SearchComponent`
does not filter anything itself; it exposes an `@Output` `EventEmitter` and emits
the typed value:

```typescript
@Output()
searchTexteChanged: EventEmitter<string> = new EventEmitter<string>();
```

`ProductsComponent` binds to that event, stores the value, and the template uses
it in an `*ngIf` condition to decide which products to render. Keeping the child
free of filtering logic means it can be reused anywhere a search input is needed.

## Getting started

Prerequisites: Node.js and npm.

```bash
git clone https://github.com/LarissaCojocaru/Flowers.git
cd Flowers
npm install
npm start
```

The application runs at `http://localhost:4200`.

## Notes

Product data is a hardcoded array in `ProductsComponent` rather than coming from
an API, and filtering is done in the template. In a larger application the data
would come from a service over HTTP and the filtering would move into a pipe or
the component class.
