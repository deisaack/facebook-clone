import { EDIT_DEVICE_INFO } from "../actions/types";
import DeviceInfo from 'react-native-device-info';


const initialState = {
    batteryLevel: undefined,
};

DeviceInfo.getBatteryLevel().then(batteryLevel => {
    initialState.batteryLevel=batteryLevel;
});
DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
    initialState.isPinOrFingerprintSet = isPinOrFingerprintSet;
});
// DeviceInfo.getIPAddress().then(ip => {
//     initialState.ip = ip;
// });
// DeviceInfo.getMACAddress().then(mac => {
//     initialState.mac = mac;
// });
initialState.brand = DeviceInfo.getBrand();
initialState.buildNumber = DeviceInfo.getBuildNumber();
initialState.bundleId = DeviceInfo.getBundleId();
initialState.carrier = DeviceInfo.getCarrier();
initialState.deviceCountry = DeviceInfo.getDeviceCountry();
initialState.deviceId = DeviceInfo.getDeviceId();
initialState.deviceLocale = DeviceInfo.getDeviceLocale();
initialState.deviceName = DeviceInfo.getDeviceName();
initialState.firstInstallTime = DeviceInfo.getFirstInstallTime();
initialState.fontScale = DeviceInfo.getFontScale();
initialState.freeDiskStorage = DeviceInfo.getFreeDiskStorage();
initialState.apiLevel = DeviceInfo.getAPILevel();
initialState.appName = DeviceInfo.getApplicationName();
initialState.referrer = DeviceInfo.getInstallReferrer();
initialState.instanceId = DeviceInfo.getInstanceID();
initialState.lastUpdateTime = DeviceInfo.getLastUpdateTime();
initialState.manufacturer = DeviceInfo.getManufacturer();
initialState.maxMemory = DeviceInfo.getMaxMemory();
initialState.model = DeviceInfo.getModel();
// initialState.phoneNumber = DeviceInfo.getPhoneNumber();
initialState.readableVersion = DeviceInfo.getReadableVersion();
initialState.serialNumber = DeviceInfo.getSerialNumber();
initialState.systemName = DeviceInfo.getSystemName();
initialState.systemVersion = DeviceInfo.getSystemVersion();
initialState.timezone = DeviceInfo.getTimezone();
initialState.storageSize = DeviceInfo.getTotalDiskCapacity();
initialState.totalMemory = DeviceInfo.getTotalMemory();
initialState.uniqueId = DeviceInfo.getUniqueID();
initialState.userAgent = DeviceInfo.getUserAgent();
initialState.version = DeviceInfo.getVersion();
initialState.is24Hour = DeviceInfo.is24Hour();
initialState.isEmulator = DeviceInfo.isEmulator();
initialState.isTablet = DeviceInfo.isTablet();


export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_DEVICE_INFO:
            state[action.payload.key] = action.payload.value;
            return state;
        default:
            return state;
    }
}
