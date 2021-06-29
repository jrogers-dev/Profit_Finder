import React from 'react';
import { Dropdown } from '@bit/primefaces.primereact.dropdown';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

class SiteDropdown extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			storeSelectItems: [
				{ label: 'Home Depot', value: '' },
				{ label: 'Lowes', value: '' },
				{ label: 'Target', value: '' },
				{ label: 'Walmart', value: '' }
			],
			store: ''
		};
  }
  
  render() {
    return (
      <div>
        <PrimereactStyle />
				<Dropdown
					style={{ width: 150 }}
					value={this.state.store}
					options={this.state.storeSelectItems}
					onChange={e => {
						this.setState({ store: e.value });
					}}
					placeholder='Select a Store'
				/>
      </div>
    );
  }
}

export default SiteDropdown;