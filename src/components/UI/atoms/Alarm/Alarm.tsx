import { IAtomLabelProps } from '../Label/Label';
import { ReactComponent as ActiveAlarm } from '../../../../src_assets/ActiveAlarm.svg';
import { ReactComponent as InactiveAlarm } from '../../../../src_assets/InactiveAlarm.svg';

export interface IAtomAlarmProps {
  active: boolean;
}

const Alarm = (props: IAtomAlarmProps) => {
  return <>{props.active ? <ActiveAlarm /> : <InactiveAlarm />}</>;
};

export default Alarm;
