# Filevine Admin Utility

The Filevine Admin Utility is a shoddily coded, undoubtedly buggy, Google Chrome extension (built in a flurry over a single weekend) that hopefully reduces the number of clicks Filevine CS Team members have to perform day-to-day. The extension literally just clicks elements in sequence for you or exports data out that would normally be exported by cutting and pasting.

## Installation

1. [Download the unpacked extension](https://github.com/jakefv/FV-Admin-Toolbar/archive/master.zip)
2. Navigate to the Chrome extensions: chrome://extensions/
3. Click "Load Unpacked" and select the downloaded file
4. While in Filevine, click on the blue puzzle piece icon in the top right to open the popup menu

-----

## Functions:

_*Note: all of the functions below require privileges. For example, if you do not have DocGen privileges for a specific project,  you cannot see its fields._

#### Saved Org

Enter the exact name of the org you are supporting. On the Advanced page the saved org will be automatically selected for you preventing tedious searching through the Choose an Org dropdown when working with clients on complicated problems. To disable, clear the text in the Saved Org field.

#### Get Current Org

Opens vitals and puts the Org Name of a project you are viewing into the Saved Org field.

#### Go to DocGen fields

If on a custom section, this button will navigate to that section's DocGen Fields page for you (even in absence of DocGen buttons!). For collections, at least one item needs to be created.

#### Export Emails

Indiscriminately exports all unique instance of emails on a page. Particularly useful for copying users from Setup > Orgs > Members

## Known Issues:

- Field selectors with numbers in them can cause 'Go to DocGen fields' to fail.
- 'Get Current Org' is hardly useful because it depends on how fast the vitals section loads.
- 'Saved Org' may require a refresh to work and also may cause performance issues.



