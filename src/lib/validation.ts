
export function validateEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 6;
}

export function validateName(name: string): boolean {
  return name.trim().length >= 2;
}

export function getEmailError(email: string): string {
  if (!email) return "Email is required";
  if (!validateEmail(email)) return "Please enter a valid email address";
  return "";
}

export function getPasswordError(password: string): string {
  if (!password) return "Password is required";
  if (!validatePassword(password)) return "Password must be at least 6 characters";
  return "";
}

export function getNameError(name: string): string {
  if (!name) return "Name is required";
  if (!validateName(name)) return "Name must be at least 2 characters";
  return "";
}
