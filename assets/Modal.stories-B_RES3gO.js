import{j as o}from"./jsx-runtime-0kNS9Jws.js";import{r as b}from"./iframe-s9_6tLSy.js";import{M,a as f}from"./Popover-Dwxz_IfO.js";import{a as x}from"./IconArrowDownloadFilled-CacR0InY.js";import{S as T}from"./index-BAmTfe4x.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-DQ0oY7V7.js";import"./types-C8uUUCvy.js";import"./helpers-DtgE-dps.js";import"./IconDismiss-BzUYgj_f.js";import"./Tooltip-ChZDZUfQ.js";import"./Text-BEWV9w1W.js";import"./index-DjjxkGhf.js";import"./Button-CaK8eNhk.js";import"./Link-MaCy-3O0.js";import"./NestedMenu-BytqOu9Y.js";import"./CollapseGroup-Czj3Q0Tw.js";import"./Divider-DQvY2Qw_.js";import"./AnimatePresenceWrapper-DGXEYeqf.js";import"./IconChevronDown-E7lLkEBk.js";import"./IconChevronUp-CFjZSywY.js";import"./IconChevronRight-CsqK3RbO.js";import"./AvatarGroup-YRb4zLAM.js";import"./DropzoneFileUpload-XSD2cL2_.js";import"./Label-1u1IJmy6.js";import"./useFormProps-Bs9w2H3r.js";import"./ErrorMessage-CyWaRtDE.js";import"./IconDynamicComponent-DCWISmBl.js";import"./Snackbar-ZisKq-vn.js";import"./Alert-CA9oHKPO.js";import"./IconDismissFilled-BOIW3_mC.js";import"./Progress-C6XE_tPx.js";import"./IconAdd-PIR0O0m2.js";import"./Checkbox-DLQmrabL.js";import"./IconInfo-DbvCGNEQ.js";import"./IconCheckmark-B4GvBG-5.js";import"./Empty-B9570_ys.js";import"./Image-CqNQPOZh.js";import"./Input-CRiy4nyt.js";import"./IconCheckmarkCircleFilled-CqllQrWD.js";import"./IconChevronLeft-DiUOLNHL.js";import"./IconCaretDownFilled-DMr_U50J.js";import"./extends-CF3RwP-h.js";import"./Tab-BAfB76h3.js";import"./Badge-KRTwOORJ.js";import"./IconMore-DTWl5dcR.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
