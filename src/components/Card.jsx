const Card = (props) => {
    const {eventdata} = props;
    const {EventHeading,EventDescription,CompanyName,Date} = eventdata;
    return (
      <div className="card">
        <div className="card-header">
          <div className="img">
          </div>
          <div className="event-company">
          <div className="eventheading">{EventHeading}</div>
          <div className="companyname">{CompanyName}</div>
          
          </div>
          </div>
    
        <p className="eventdescription">{EventDescription}</p>
        <div className="parameters"> 
            <button>Tag 1</button>
            <button>Tag 2</button>
            <button>Parameter 1 </button>
            <button>Parameter 2</button>
          </div>
          <div className="cardfooter">
            <div className="positioning">
            <span className="date"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.0303 0.933594V2.24026H8.96029V0.933594H10.2703V2.24026H12.8903C13.252 2.24026 13.5453 2.53277 13.5453 2.89359V13.3469C13.5453 13.7078 13.252 14.0003 12.8903 14.0003H1.10031C0.738568 14.0003 0.445312 13.7078 0.445312 13.3469V2.89359C0.445312 2.53277 0.738568 2.24026 1.10031 2.24026H3.72031V0.933594H5.0303ZM12.2353 7.46693H1.75531V12.6936H12.2353V7.46693ZM4.3753 8.77359V10.0803H3.06531V8.77359H4.3753ZM7.6503 8.77359V10.0803H6.3403V8.77359H7.6503ZM10.9253 8.77359V10.0803H9.61529V8.77359H10.9253ZM3.72031 3.54693H1.75531V6.16026H12.2353V3.54693H10.2703V4.85359H8.96029V3.54693H5.0303V4.85359H3.72031V3.54693Z" fill="black"/>
</svg>
{Date}</span>
            
            
            <span className="status"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.50977" cy="6" r="6" fill="#25D366" fill-opacity="0.2"/>
<circle cx="6.50977" cy="6" r="4" fill="#25D366" fill-opacity="0.6"/>
<circle cx="6.50977" cy="6" r="2" fill="#25D366" fill-opacity="0.9"/>
</svg>
  Happening now</span>
            <span className="type">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.37321 13.8406L3.73292 10.1283C1.72248 8.07805 1.72249 4.75395 3.73295 2.7037C5.7434 0.653459 9.00299 0.653452 11.0135 2.70369C13.0239 4.75392 13.0239 8.07802 11.0135 10.1283L7.37321 13.8406ZM10.2044 9.30257C11.768 7.70789 11.7679 5.12254 10.2042 3.52797C8.64055 1.93339 6.10538 1.93339 4.5417 3.52795C2.97801 5.12252 2.97791 7.70787 4.54148 9.30256L7.37296 12.1901L10.2044 9.30257ZM7.37412 7.58333C6.9654 7.58333 6.58772 7.36097 6.38336 7C6.179 6.63903 6.179 6.1943 6.38336 5.83333C6.58772 5.47237 6.9654 5.25 7.37412 5.25C7.78284 5.25 8.16051 5.47237 8.36487 5.83333C8.56923 6.1943 8.56923 6.63903 8.36487 7C8.16051 7.36097 7.78284 7.58333 7.37412 7.58333Z" fill="black"/>
</svg>
News</span>
            <span>attachment:
              <span className="pdfdownload">
              
              <svg className="file" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.509766" width="20" height="20" rx="2" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.71677 6L10.7168 7H15.0098C15.2859 7 15.5098 7.22386 15.5098 7.5V14.5C15.5098 14.7761 15.2859 15 15.0098 15H6.00977C5.73362 15 5.50977 14.7761 5.50977 14.5V6.5C5.50977 6.22386 5.73362 6 6.00977 6H9.71677ZM13.5098 13.5H11.5098V12H12.5098V11H11.5098V10H12.5098V9H11.5098V8H10.3028L9.30277 7H6.50977V14H14.5098V8H12.5098V9H13.5098V10H12.5098V11H13.5098V13.5Z" fill="white"/></svg>
              <svg className="more" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="18" height="18" rx="2" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.11111 8C4.5 8 4 8.52156 4 9.15902C4 9.79649 4.5 10.318 5.11111 10.318C5.72222 10.318 6.22222 9.79649 6.22222 9.15902C6.22222 8.52156 5.72222 8 5.11111 8ZM12.889 8C12.2779 8 11.7779 8.52156 11.7779 9.15902C11.7779 9.79649 12.2779 10.318 12.889 10.318C13.5001 10.318 14.0001 9.79649 14.0001 9.15902C14.0001 8.52156 13.5001 8 12.889 8ZM8.99986 8C8.38875 8 7.88875 8.52156 7.88875 9.15902C7.88875 9.79649 8.38875 10.318 8.99986 10.318C9.61098 10.318 10.111 9.79649 10.111 9.15902C10.111 8.52156 9.61098 8 8.99986 8Z" fill="white"/>
</svg>
Document.pdf

              </span>
              </span>
            <button className="readmore">Read More</button>
            </div>
            </div>
      </div>
    );
  };
  export default Card