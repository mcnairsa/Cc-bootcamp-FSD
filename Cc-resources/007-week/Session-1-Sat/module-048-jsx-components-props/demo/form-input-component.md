```jsx
function FormInput({ label, type = "text", value, onChange, error, required = false }) {
  return (
    <div className="form-group">
      <label className={required ? 'required' : ''}>
        {label}
        <input 
          type={type}
          value={value}
          onChange={onChange}
          className={error ? 'error' : ''}
        />
      </label>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

// Usage
function ContactForm() {
  return (
    <form>
      <FormInput 
        label="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required={true}
      />
      <FormInput 
        label="Email" 
        type="email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        required={true}
      />
    </form>
  );
}
```