import {
  generateAudioComponent,
} from './generateAudioComponent';
import {
  IManager,
} from './IManager';
import {
  assert,
} from 'ts-assertions';

export const strings = {
  MANAGER_INVALID:
    'The manager argument was not provided to generateAudioPanelElement.',
};

export function generateAudioPanelElement(manager: IManager) {
  assert(manager, strings.MANAGER_INVALID);

  const audioPanelElement = document.createElement('div');
  audioPanelElement.className = 'sound-manager-panel';

  /* Add the master volume slider. */
  audioPanelElement.appendChild(generateAudioComponent(manager));

  Object.keys(manager.collection.groups).forEach((groupName) => {
    const group = manager.collection.getGroup(groupName);
    if (group.isPanelRegistered()) {
      /* Add registered group sliders. */
      audioPanelElement.appendChild(generateAudioComponent(group, groupName));
    }

    Object.keys(group.sounds).forEach((soundName) => {
      const sound = group.getSound(soundName);
      if (sound.isPanelRegistered()) {
        /* Add registered sound sliders. */
        audioPanelElement.appendChild(generateAudioComponent(
          sound,
          soundName,
        ));
      }
    });
  });

  return audioPanelElement;
};
