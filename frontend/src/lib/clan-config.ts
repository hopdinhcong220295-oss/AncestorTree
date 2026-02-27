/**
 * @project AncestorTree
 * @file src/lib/clan-config.ts
 * @description Clan name configuration from environment variables
 * @version 1.0.0
 * @updated 2026-02-27
 */

// Short clan name (e.g. "Họ Đinh")
export const CLAN_NAME = process.env.NEXT_PUBLIC_CLAN_NAME || 'Họ Đinh';

// Full clan name with location (e.g. "Họ Đinh Thôn An Thái")
export const CLAN_FULL_NAME = process.env.NEXT_PUBLIC_CLAN_FULL_NAME || 'Họ Đinh Thôn An Thái';

// Derived: first letter of the family surname (e.g. "Đ" from "Họ Đinh")
const parts = CLAN_NAME.split(' ');
export const CLAN_INITIAL = parts.length > 1 ? parts[parts.length - 1][0] : parts[0][0];

// Derived: location subtitle (e.g. "Thôn An Thái" from full name minus short name)
export const CLAN_SUBTITLE = CLAN_FULL_NAME.startsWith(CLAN_NAME)
  ? CLAN_FULL_NAME.slice(CLAN_NAME.length).trim()
  : '';
