import React from 'react';
import { Dropdown } from '@bit/primefaces.primereact.dropdown';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

class SiteDropdown extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			storeSelectItems: [
				{ label: 'Home Depot', value: 'Home Depot' },
				{ label: 'Lowes', value: 'Lowes' },
				{ label: 'Target', value: 'Target' },
				{ label: 'Walmart', value: 'Walmart' }
			],
			store: ''
		};
  }
  
  render() {
    return (
      <div>
        <PrimereactStyle />
				<Dropdown
					style={{ width: 200 }}
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