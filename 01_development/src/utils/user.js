import device from 'current-device';

const deviceIsMobile = device.type == ('mobile' || 'tablet');

export { deviceIsMobile };
