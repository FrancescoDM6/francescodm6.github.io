/**
 * Derives a plain-text summary from a content entry.
 * Uses the subtitle when present, otherwise strips common markdown
 * syntax from the raw body and truncates to 160 characters.
 */
export const toSummary = (subtitle: string | undefined, body: string): string => {
    if (subtitle && subtitle.trim().length > 0) {
        return subtitle.trim();
    }

    return body
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/[>#*_~-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 160);
};
