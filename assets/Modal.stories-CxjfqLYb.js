import{j as o}from"./jsx-runtime-hRHawQBZ.js";import{r as b}from"./iframe-CUT2okj2.js";import{M,a as f}from"./Popover-BatYE50F.js";import{a as x}from"./IconArrowDownloadFilled-CpMYEh1S.js";import{S as T}from"./index-DjlPePv0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BEY2fyvh.js";import"./types-CE36gYxb.js";import"./helpers-BLQyT1U3.js";import"./IconDismiss-CTOZt6dq.js";import"./Tooltip-C357lVtq.js";import"./Text-BP7KAqxP.js";import"./index-BhZI_l9L.js";import"./Button-Be5IWYBq.js";import"./Link-B5cQBUgV.js";import"./NestedMenu-DsMjJh03.js";import"./CollapseGroup-B2G9LDQZ.js";import"./Divider-B503EVz3.js";import"./AnimatePresenceWrapper-D3tVW7lW.js";import"./IconChevronDown-4Smsjuv8.js";import"./IconChevronUp-DQtWnqPv.js";import"./IconChevronRight-BumC-wUo.js";import"./AvatarGroup-D4WbA8_B.js";import"./DropzoneFileUpload-C6I-nf4n.js";import"./Label-BZS6yOig.js";import"./useFormProps-CGOHZs_J.js";import"./ErrorMessage-DdSCWbtv.js";import"./IconDynamicComponent-C_tAHs63.js";import"./Snackbar-aQzDvACH.js";import"./Alert-DJccKZrm.js";import"./IconDismissFilled-CDvnXXRj.js";import"./Progress-as3fWM1N.js";import"./IconAdd-D4984g_C.js";import"./Checkbox-CNR1CGOX.js";import"./IconInfo-C2fjOian.js";import"./IconCheckmark-Aw8is5Cx.js";import"./Empty-BMCPWHvE.js";import"./Image-CtnTcY7i.js";import"./Input-CMrdoRNK.js";import"./IconCheckmarkCircleFilled-C2WFSsXI.js";import"./IconChevronLeft-DE8C40ux.js";import"./IconCaretDownFilled-UDiu7jSt.js";import"./extends-CF3RwP-h.js";import"./Tab-0S14ErUv.js";import"./Badge-bVzpUy-O.js";import"./IconMore-DP8TQlmv.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
