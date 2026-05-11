/**
 * Simple client-side analytics tracker using localStorage
 * Tracks page views, searches, and clicks for the current session.
 */

export interface AnalyticsData {
  pageViews: number;
  sessionStartTime: number;
  recentActions: Array<{
    id: number;
    user: string;
    action: string;
    time: number;
  }>;
  popularPages: Record<string, number>;
  topSearches: Record<string, number>;
  devices: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

const STORAGE_KEY = "sp_wiki_analytics";

const getInitialData = (): AnalyticsData => ({
  pageViews: 0,
  sessionStartTime: Date.now(),
  recentActions: [],
  popularPages: {},
  topSearches: {},
  devices: { mobile: 0, desktop: 0, tablet: 0 },
});

export const getAnalytics = (): AnalyticsData => {
  if (typeof window === "undefined") return getInitialData();
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return getInitialData();
  
  const data = JSON.parse(stored);
  // Merge with initial data to ensure new fields like 'devices' exist for old sessions
  return {
    ...getInitialData(),
    ...data,
    devices: {
      ...getInitialData().devices,
      ...(data.devices || {})
    }
  };
};

const detectDevice = (): "mobile" | "desktop" | "tablet" => {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
  return "desktop";
};

export const saveAnalytics = (data: AnalyticsData) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const trackPageView = (path: string, label: string) => {
  const data = getAnalytics();
  data.pageViews += 1;
  data.popularPages[label] = (data.popularPages[label] || 0) + 1;
  
  // Track device on every page view
  const device = detectDevice();
  data.devices[device] = (data.devices[device] || 0) + 1;
  
  data.recentActions = [
    {
      id: Date.now(),
      user: "You",
      action: `Viewed '${label}'`,
      time: Date.now(),
    },
    ...data.recentActions.slice(0, 9),
  ];
  
  saveAnalytics(data);
};

export const trackSearch = (term: string) => {
  if (!term.trim()) return;
  const data = getAnalytics();
  data.topSearches[term] = (data.topSearches[term] || 0) + 1;
  
  data.recentActions = [
    {
      id: Date.now(),
      user: "You",
      action: `Searched '${term}'`,
      time: Date.now(),
    },
    ...data.recentActions.slice(0, 9),
  ];
  
  saveAnalytics(data);
};

export const trackAction = (action: string) => {
  const data = getAnalytics();
  data.recentActions = [
    {
      id: Date.now(),
      user: "You",
      action: action,
      time: Date.now(),
    },
    ...data.recentActions.slice(0, 9),
  ];
  saveAnalytics(data);
};

export const resetAnalytics = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
};
