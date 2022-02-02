export const mobileBreakpoint = "(max-width: 991px)";

export const getAdaptiveClassName = (
  mainClass: string,
  isMobile: boolean
): string => (isMobile ? `${mainClass} ${mainClass}-mobile` : mainClass);
