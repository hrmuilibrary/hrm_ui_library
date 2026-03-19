import{j as o}from"./jsx-runtime-ChD-R_kZ.js";import{r as b}from"./iframe-D86-JIDQ.js";import{M,a as f}from"./Popover-DD9I3MRL.js";import{a as x}from"./IconArrowDownloadFilled-CFGUR341.js";import{S as T}from"./index-CHjbJD20.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DxyDKgbu.js";import"./types-DjDoCdZV.js";import"./helpers-CpnOmP83.js";import"./IconDismiss-6cVGHi3N.js";import"./Tooltip-LkO0QyFh.js";import"./Text-DVcah_Ok.js";import"./Button-LUwtYCUX.js";import"./Link-_LQtXONk.js";import"./NestedMenu-DhwnfR31.js";import"./index-mTSsNOLU.js";import"./CollapseGroup-PYkynFAj.js";import"./Divider-BwuJUjKI.js";import"./AnimatePresenceWrapper-AquoTjff.js";import"./IconChevronDown-DAJiWW6b.js";import"./IconChevronUp-BbpKS0S-.js";import"./IconChevronRight-CsPPXlL_.js";import"./AvatarGroup-dGRJvBgf.js";import"./DropzoneFileUpload-CtLH8Y5o.js";import"./Label-Cx8FIzSv.js";import"./useFormProps-DLdG--2n.js";import"./ErrorMessage-DQYtSCKQ.js";import"./IconDynamicComponent-CeAi6ncG.js";import"./Snackbar-CMDdQmA_.js";import"./Alert-CFXHYL-d.js";import"./IconDismissFilled-CgKkOrlA.js";import"./Progress-D_zgdfA1.js";import"./IconAdd-6jyQ_3jM.js";import"./Checkbox-Byux2FU0.js";import"./IconInfo-CoSWVBXK.js";import"./IconCheckmark-ClJIq4q4.js";import"./Empty-DppTzvs3.js";import"./Image-to_VyXfR.js";import"./Input-CN6EPD3W.js";import"./IconCheckmarkCircleFilled-D3GsNZqJ.js";import"./IconChevronLeft-DAg4BKyJ.js";import"./IconCaretDownFilled-7Jv6OBbQ.js";import"./extends-CF3RwP-h.js";import"./Tab-4zGoAZBE.js";import"./Badge-NF4gl1no.js";import"./IconMore-DfqohY-g.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
