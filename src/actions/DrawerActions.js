import { DRAWER_SHOW, DRAWER_HIDE } from "../constants/DrawerActions";

export const showDrawer = () => ({ 
  type: DRAWER_SHOW,
});

export const hideDrawer = () => ({ 
  type: DRAWER_HIDE,
});
