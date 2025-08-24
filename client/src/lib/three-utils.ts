// Utility functions for Three.js operations
export const createGlowMaterial = (color: string, intensity: number = 1) => {
  return {
    color,
    emissive: color,
    emissiveIntensity: intensity * 0.3,
    transparent: true,
    opacity: 0.8,
  };
};

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const randomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const degreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

export const radiansToDegrees = (radians: number): number => {
  return radians * (180 / Math.PI);
};

// Easing functions for smooth animations
export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Vector3 utility
export class Vector3 {
  constructor(public x: number = 0, public y: number = 0, public z: number = 0) {}

  set(x: number, y: number, z: number): Vector3 {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  add(vector: Vector3): Vector3 {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    return this;
  }

  multiplyScalar(scalar: number): Vector3 {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize(): Vector3 {
    const length = this.length();
    if (length !== 0) {
      this.multiplyScalar(1 / length);
    }
    return this;
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
