import{j as o}from"./jsx-runtime-DLRlo0XP.js";import{r as b}from"./iframe-Bq0w8vBp.js";import{M,a as f}from"./Popover-D1ArDSyc.js";import{a as x}from"./IconArrowDownloadFilled-Dy898Vpv.js";import{S as T}from"./index-QGXEslj2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-LdNWB7wK.js";import"./types-DbpiJ3Vh.js";import"./helpers-Cp_V_y2V.js";import"./IconDismiss-aXRj0C3I.js";import"./Tooltip-BUbv8Qc5.js";import"./Text-BuY9ajB7.js";import"./index-BTju2p1K.js";import"./Button-CZ7aR90w.js";import"./Link-CWPsl9gq.js";import"./NestedMenu-2P-pPLZZ.js";import"./CollapseGroup-JN5INDHY.js";import"./Divider-BeYFIcVG.js";import"./AnimatePresenceWrapper-By07dwLq.js";import"./IconChevronDown-DT4pGUCl.js";import"./IconChevronUp-C04jpLxJ.js";import"./IconChevronRight-CC_3Rh4j.js";import"./AvatarGroup-CItkAbap.js";import"./DropzoneFileUpload-B0CSXyJ3.js";import"./Label-C7EKpaUv.js";import"./useFormProps-C93uHfIG.js";import"./ErrorMessage-BVS2fiqK.js";import"./IconDynamicComponent-D58Y_MXX.js";import"./Snackbar-_FFrVzzP.js";import"./Alert-vHUc5geZ.js";import"./IconDismissFilled-C2gnCQR-.js";import"./Progress-BkE-PESJ.js";import"./IconAdd-BB9wlNmb.js";import"./Checkbox-BEJjaesl.js";import"./IconInfo-BxB4cQwd.js";import"./IconCheckmark-BqmF3KBP.js";import"./Empty-nJRfIPq0.js";import"./Image-DgriIRfY.js";import"./Input-GUd03S-w.js";import"./IconCheckmarkCircleFilled-BNSc7A8r.js";import"./IconChevronLeft-XY6uGmxu.js";import"./IconCaretDownFilled-CkBa8d6g.js";import"./extends-CF3RwP-h.js";import"./Tab-BasvvrNx.js";import"./Badge-BLjwtrYt.js";import"./IconMore-DxAYvLNw.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
