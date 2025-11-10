# Essential console commands used in NestJS development

## Project Management

```bash
# Install NestJS CLI globally
npm install -g @nestjs/cli

# Create a new NestJS project
nest new project-name

# Generate various NestJS components
nest generate controller users
nest generate service users
nest generate module users
nest generate resource users

# Short versions
nest g co users
nest g s users
nest g mo users
nest g res users
```

## Common Generator Commands

```bash
# Generate different types of components
nest generate class user.entity
nest generate interface user.interface
nest generate decorator roles
nest generate filter http-exception
nest generate guard auth
nest generate interceptor logging
nest generate middleware logger
nest generate pipe validation
nest generate gateway events
nest generate resolver users
```

## Development Commands

```bash
# Start in development mode (with watch)
npm run start:dev

# Start in production mode
npm run start

# Start in debug mode
npm run start:debug

# Build the project
npm run build

# Run tests
npm run test
npm run test:watch
npm run test:cov  # with coverage
npm run test:e2e  # end-to-end tests
```

## Project Information

```bash
# Display project information
nest info

# List available schematics
nest generate --help

# Update NestJS dependencies
nest update
```

## Advanced Commands

```bash
# Generate a library
nest generate library my-lib

# Add a new element to existing module
nest generate service users --no-spec  # without test file

# Generate with custom path
nest generate controller admin/users --flat
```

## Common npm Scripts

```bash
# Install dependencies
npm install

# Lint code
npm run lint

# Format code
npm run format

# Build and run production
npm run build && npm run start:prod
```

These commands cover the most common scenarios in NestJS development. The CLI is your primary tool for generating boilerplate code and managing your NestJS projects efficiently.
