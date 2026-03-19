import{j as o}from"./jsx-runtime-Dj-1N4kP.js";import{r as b}from"./iframe-BW6qrJd0.js";import{M,a as f}from"./Popover-CHKJxmM1.js";import{a as x}from"./IconArrowDownloadFilled-CPk2P8eh.js";import{S as T}from"./index-CJuNgShJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-BucjkSPe.js";import"./types-Ciw2WWr_.js";import"./helpers-CMzdqU8d.js";import"./IconDismiss-BW1slJaZ.js";import"./Tooltip-Blofrkpi.js";import"./Text-CiKfN369.js";import"./Button-ByO1cT_B.js";import"./Link-CzFaQGg2.js";import"./NestedMenu-CpYfVwyk.js";import"./index-mZM88a4Z.js";import"./CollapseGroup-ie--3Uvc.js";import"./Divider-DxfR80Fp.js";import"./AnimatePresenceWrapper-B6Zy5ON4.js";import"./IconChevronDown-Do8ZKWJ6.js";import"./IconChevronUp-CI1P2nSW.js";import"./IconChevronRight-DbNiXG_h.js";import"./AvatarGroup-u1qioCwJ.js";import"./DropzoneFileUpload-BQsyMK4Y.js";import"./Label-ycAomoV_.js";import"./useFormProps-DdzaBnfC.js";import"./ErrorMessage-31IhDhSP.js";import"./IconDynamicComponent-BJNL2pc_.js";import"./Snackbar-CrY3lgbF.js";import"./Alert-e8KEv15l.js";import"./IconDismissFilled-C3x31Y0r.js";import"./Progress-D21lTS0s.js";import"./IconAdd-PaqhTdRI.js";import"./Checkbox-B8BahYWB.js";import"./IconInfo-Bhawo_dY.js";import"./IconCheckmark-BNA5abUP.js";import"./Empty-Do4ajD80.js";import"./Image-BDt6Z9tq.js";import"./Input-BQ6u9CyD.js";import"./IconCheckmarkCircleFilled-CtbnF8te.js";import"./IconChevronLeft-D2OMnLaO.js";import"./IconCaretDownFilled-BlbK7bcQ.js";import"./extends-CF3RwP-h.js";import"./Tab-EKzbec0t.js";import"./Badge-BJyliRUA.js";import"./IconMore-tG2YN07R.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
