import React from 'react';
import ClockIcon from '../../assets/icons/clock.svg?react';
import SunIcon from '../../assets/icons/sun.svg?react';
import NotificationIcon from '../../assets/icons/notification.svg?react';
import ToggleIcon from '../../assets/icons/toggle.svg?react';
import ProfileIcon from '../../assets/icons/profile.svg?react';
import DefaultIcon from '../../assets/icons/defaultIcon.svg?react';
import ShoppingBagIcon from '../../assets/icons/ShoppingBagOpen.svg?react';
import ProjectsIcon from '../../assets/icons/projects.svg?react';
import BookOpenIcon from '../../assets/icons/BookOpen.svg?react';
import UserProfileIcon from '../../assets/icons/user-profile.svg?react';
import AccountIcon from '../../assets/icons/account.svg?react';
import CorporateIcon from '../../assets/icons/corporate.svg?react';
import BlogIcon from '../../assets/icons/blog.svg?react';
import SocialIcon from '../../assets/icons/social.svg?react';
import MoonIcon from '../../assets/icons/moon.svg?react';
import LightClockIcon from '../../assets/icons/light-clock.svg?react';
import LightNotificationIcon from '../../assets/icons/light-notification.svg?react';
import LightStarIcon from '../../assets/icons/light-star.svg?react';
import BugIcon from '../../assets/icons/bug.svg?react';
import NewUserIcon from '../../assets/icons/new-user.svg?react';
import SubscribeIcon from '../../assets/icons/subscribe.svg?react';
import UpArrowIcon from '../../assets/icons/light-up-arrow.svg?react';
import DownArrowIcon from '../../assets/icons/light-down-arrow.svg?react';

import DarkStarIcon from '../../assets/icons/dark-star.svg?react';
import DarkDefaultIcon from '../../assets/icons/dark-default.svg?react';
import DarkShoppingBagIcon from '../../assets/icons/dark-shopping-bag.svg?react';
import DarkProjectsIcon from '../../assets/icons/dark-project.svg?react';
import DarkBookOpenIcon from '../../assets/icons/dark-user-profile.svg?react';
import DarkUserProfileIcon from '../../assets/icons/dark-user-profile.svg?react';
import DarkCorporateIcon from '../../assets/icons/dark-corporate.svg?react';
import DarkAcoountIcon from '../../assets/icons/dark-account.svg?react';
import DarkBlogIcon from '../../assets/icons/dark-blog.svg?react';
import DarkSocialIcon from '../../assets/icons/dark-social.svg?react';
import DarkToggleIcon from '../../assets/icons/dark-toggle.svg?react';

const DEFAULT_ICON_PROPS = {
  width: 20,
  height: 20,
};


const withDefaultProps = (IconComponent: React.ComponentType<any>) => {
  return (props: any = {}) => (
    <IconComponent {...DEFAULT_ICON_PROPS} {...props} />
  );
};

const CustomIcons = {
  Clock: withDefaultProps(ClockIcon),
  Sun: withDefaultProps(SunIcon),
  Notification: withDefaultProps(NotificationIcon),
  Toggle: withDefaultProps(ToggleIcon),
  Profile: withDefaultProps(ProfileIcon),
  ShoppingBag: withDefaultProps(ShoppingBagIcon),
  Projects: withDefaultProps(ProjectsIcon),
  BookOpen: withDefaultProps(BookOpenIcon),
  Default: withDefaultProps(DefaultIcon),
  UserProfile: withDefaultProps(UserProfileIcon),
  Account: withDefaultProps(AccountIcon),
  Corporate: withDefaultProps(CorporateIcon),
  Blog: withDefaultProps(BlogIcon),
  Social: withDefaultProps(SocialIcon),
  Moon: withDefaultProps(MoonIcon),
  LightClock: withDefaultProps(LightClockIcon),
  LightNotification: withDefaultProps(LightNotificationIcon),
  LightStar: withDefaultProps(LightStarIcon),
  DarkStar: withDefaultProps(DarkStarIcon),
  Bug: withDefaultProps(BugIcon),
  NewUser: withDefaultProps(NewUserIcon),
  Subscribe: withDefaultProps(SubscribeIcon),
  UpArrow: withDefaultProps(UpArrowIcon),
  DownArrow: withDefaultProps(DownArrowIcon),
  DarkDefault: withDefaultProps(DarkDefaultIcon),
  DarkShoppingBag: withDefaultProps(DarkShoppingBagIcon),
  DarkProjects: withDefaultProps(DarkProjectsIcon),
  DarkBookOpen: withDefaultProps(DarkBookOpenIcon),
  DarkUserProfile: withDefaultProps(DarkUserProfileIcon),
  DarkCorporate: withDefaultProps(DarkCorporateIcon),
  DarkAcoount: withDefaultProps(DarkAcoountIcon),
  DarkBlog: withDefaultProps(DarkBlogIcon),
  DarkSocial: withDefaultProps(DarkSocialIcon),
  DarkToggle: withDefaultProps(DarkToggleIcon),
};

export default CustomIcons;
