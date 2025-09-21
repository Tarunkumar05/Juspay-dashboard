import React from 'react';
import {ReactComponent as  ClockIcon} from '../../assets/icons/clock.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg';
import { ReactComponent as ToggleIcon } from '../../assets/icons/toggle.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';
import { ReactComponent as DefaultIcon } from '../../assets/icons/defaultIcon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/ShoppingBagOpen.svg';
import { ReactComponent as ProjectsIcon } from '../../assets/icons/projects.svg';
import { ReactComponent as BookOpenIcon } from '../../assets/icons/BookOpen.svg';
import { ReactComponent as UserProfileIcon } from '../../assets/icons/user-profile.svg';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import { ReactComponent as CorporateIcon } from '../../assets/icons/corporate.svg';
import { ReactComponent as BlogIcon } from '../../assets/icons/blog.svg';
import { ReactComponent as SocialIcon } from '../../assets/icons/social.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { ReactComponent as LightClockIcon } from '../../assets/icons/light-clock.svg';
import { ReactComponent as LightNotificationIcon } from '../../assets/icons/light-notification.svg';
import { ReactComponent as LightStarIcon } from '../../assets/icons/light-star.svg';
import { ReactComponent as BugIcon } from '../../assets/icons/bug.svg';
import { ReactComponent as NewUserIcon } from '../../assets/icons/new-user.svg';
import { ReactComponent as SubscribeIcon } from '../../assets/icons/subscribe.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/light-up-arrow.svg';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/light-down-arrow.svg';

import { ReactComponent as DarkStarIcon } from '../../assets/icons/dark-star.svg';
import { ReactComponent as DarkDefaultIcon } from '../../assets/icons/dark-default.svg';
import { ReactComponent as DarkShoppingBagIcon } from '../../assets/icons/dark-shopping-bag.svg';
import { ReactComponent as DarkProjectsIcon } from '../../assets/icons/dark-project.svg';
import { ReactComponent as DarkBookOpenIcon } from '../../assets/icons/dark-user-profile.svg';
import { ReactComponent as DarkUserProfileIcon } from '../../assets/icons/dark-user-profile.svg';
import { ReactComponent as DarkCorporateIcon } from '../../assets/icons/dark-corporate.svg';
import { ReactComponent as DarkAcoountIcon } from '../../assets/icons/dark-account.svg';
import { ReactComponent as DarkBlogIcon } from '../../assets/icons/dark-blog.svg';
import { ReactComponent as DarkSocialIcon } from '../../assets/icons/dark-social.svg';
import { ReactComponent as DarkToggleIcon } from '../../assets/icons/dark-toggle.svg';


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
