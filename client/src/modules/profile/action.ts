export const INIT_PROFILE = 'profile/INIT_PROFILE' as const;
export const initProfile = (profile: any) => ({
  type: INIT_PROFILE,
  payload: profile,
});
