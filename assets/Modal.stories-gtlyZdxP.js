import{j as o}from"./jsx-runtime-BcRMXQyU.js";import{r as b}from"./iframe-BmPqtltp.js";import{M,a as f}from"./Popover-BZqhUUzn.js";import{a as x}from"./IconArrowDownloadFilled-DF6_wm9j.js";import{S as T}from"./index-DTerVP5L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-B4zDiMuM.js";import"./types-DKrvdElD.js";import"./helpers-BSfmB4bo.js";import"./IconDismiss-BHf4nfNZ.js";import"./Tooltip-DCyFeIsx.js";import"./Text-CEYn29Gb.js";import"./Button-DZDCfiqQ.js";import"./Link-CGW62roK.js";import"./NestedMenu-zK-JzIB5.js";import"./index-B02YPdu9.js";import"./CollapseGroup-CFJ6qB-I.js";import"./Divider-CDZNQ3nR.js";import"./AnimatePresenceWrapper-HOZBfj0s.js";import"./IconChevronDown-spapFAV0.js";import"./IconChevronUp-BStg_aVG.js";import"./IconChevronRight-KuPIgtnh.js";import"./AvatarGroup-DaL6H76R.js";import"./DropzoneFileUpload-73fkr5Je.js";import"./Label-Dz0ZVh8p.js";import"./useFormProps-CuxG-cwi.js";import"./ErrorMessage-CVfeRgq-.js";import"./IconDynamicComponent-CRdYp_EF.js";import"./Snackbar-DBsKVVZA.js";import"./Alert-DxbPVG7I.js";import"./IconDismissFilled-0Xm-0IC1.js";import"./Progress-BtDxFdH2.js";import"./IconAdd-DR-IH63g.js";import"./Checkbox-CWt2nQTf.js";import"./IconInfo-xonxLAw7.js";import"./IconCheckmark-Btt5PURx.js";import"./Empty-BZbvbvKj.js";import"./Image-BQSlv7Ts.js";import"./Input-UptuIXAn.js";import"./IconCheckmarkCircleFilled-u6draltm.js";import"./IconChevronLeft-j684L8PP.js";import"./IconCaretDownFilled-D0_1nXiQ.js";import"./extends-CF3RwP-h.js";import"./Tab-Ck5yPiJR.js";import"./Badge-DSrCzsA7.js";import"./IconMore-BMMl8rXb.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
