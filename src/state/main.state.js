import Vue from "vue";

const state = Vue.observable({
  isMenuOpen: false,
  isShowGrid: false,
  isDarkModeOn: false,
});

export const pageSettingsGetters = {
  isMenuOpen: () => state.isMenuOpen,
  isShowGrid: () => state.isShowGrid,
  isDarkModeOn: () => state.isDarkModeOn,
};
export const pageSettingsMutations = {
  openMenu: () => {
    state.isMenuOpen = true;
  },
  closeMenu: () => {
    state.isMenuOpen = false;
  },
  toggleMenu: () => {
    state.isMenuOpen = !state.isMenuOpen;
  },
  toggleGrid: () => {
    state.isShowGrid = !state.isShowGrid;
  },
  toggleDarkMode: () => {
    state.isDarkModeOn = !state.isDarkModeOn;
  },
};
