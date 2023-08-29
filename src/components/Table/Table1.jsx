import React from 'react';
import './Table1.css';

const Table1 = () => {
    return (
        <div className='fullTable'> 
            <table className="Color1">
                <thead>
                    <tr className='Color2'>
                        <th scope="col">Source</th>
                        <th scope="col">Ad</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Sales</th>
                        <th scope="col">First time customers</th>
                        <th scope="col">Revenue</th>
                        <th scope="col">ROAS</th>
                        <th scope="col">CAC</th>
                        <th scope="col">F.T. ROAS</th>
                    </tr>
                </thead>
                <tbody className='Color1'>
                    <tr>
                        <td className=''>Youtube</td>
                        <td>Male_18+_UGC_Video</td>
                        <td>$2,567.00</td>
                        <td>120</td>
                        <td>90</td>
                        <td>$10,800.00</td>
                        <td>4.21</td>
                        <td>$28.52</td>
                        <td>3.16</td>
                    </tr>
                    <tr>
                        <td>Adwords</td>
                        <td>US_Generic_Search</td>
                        <td>$1,233.00</td>
                        <td>98</td>
                        <td>71</td>
                        <td>$5,880.00</td>
                        <td>4.77</td>
                        <td>$17.48</td>
                        <td>3.43</td>
                    </tr>
                    <tr>
                        <td>Adwords</td>
                        <td>SKU2343_shoppong</td>
                        <td>$3,120.00</td>
                        <td>150</td>
                        <td>127</td>
                        <td>$14,700.00</td>
                        <td>4.71</td>
                        <td>$24.55</td>
                        <td>3.99</td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>All_25+_Static_split_screen</td>
                        <td>$5,400.00</td>
                        <td>145</td>
                        <td>111</td>
                        <td>$11,600.00</td>
                        <td>2.15</td>
                        <td>$48.54</td>
                        <td>1.65</td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>UGS_video_2</td>
                        <td>$3,100.00</td>
                        <td>120</td>
                        <td>110</td>
                        <td>$7,080.00</td>
                        <td>2.28</td>
                        <td>$28.14</td>
                        <td>2.10</td>
                    </tr>
                    <tr>
                        <td>TikTok</td>
                        <td>UGS_video_2</td>
                        <td>$3,100.00</td>
                        <td>120</td>
                        <td>110</td>
                        <td>$7,080.00</td>
                        <td>2.28</td>
                        <td>$28.14</td>
                        <td>2.10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;