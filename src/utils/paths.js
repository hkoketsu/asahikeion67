// Helper function to get the correct asset path for GitHub Pages
export function getAssetPath(path) {
  const base = import.meta.env.BASE_URL || '';
  // Remove leading slash from path if base already has one
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

// For archived content that already uses absolute paths
export function getArchivedPath(path) {
  const base = import.meta.env.BASE_URL || '';
  // Archived content paths start with /archived/
  if (path.startsWith('/archived/')) {
    const cleanPath = path.slice(1); // Remove leading slash
    return `${base}${cleanPath}`;
  }
  return path;
}