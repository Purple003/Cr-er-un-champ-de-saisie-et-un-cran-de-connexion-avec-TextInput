# Login App - TextInput 📝🔒

A demo application exploring user input in React Native using `TextInput` and `useState`.

## 🛠 Features

- **Dynamic Input**: Captures user data in real-time.
- **Email Validation Support**: uses `keyboardType="email-address"`.
- **Security**: Implements `secureTextEntry` for passwords.
- **State Management**: Uses React hooks (`useState`) to manage field values.

## 🚀 Getting Started

1. Navigate to the project directory:
   ```bash
   cd login-app-textinput
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo server with tunneling:
   ```bash
   npx expo start --tunnel
   ```

## 📁 Structure

- `components/WelcomeScreen.js`: Single field input demo.
- `components/LoginScreen.js`: Multi-field secure login demo.
- `App.js`: Screen management.
