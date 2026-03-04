import{j as o}from"./jsx-runtime-CngKgbe6.js";import{r as b}from"./iframe-Cz66miii.js";import{M,a as f}from"./Popover-Df-JaJu_.js";import{a as x}from"./IconArrowDownloadFilled-CyBZC63Q.js";import{S as T}from"./index-BCUKhn2J.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DSQl18Y3.js";import"./types-Bh1UU2xh.js";import"./helpers-J1p4D3T7.js";import"./IconDismiss-BvoGMAiU.js";import"./Tooltip-D6DTlN5i.js";import"./Text-BGEowCTX.js";import"./Button-OZu94O-G.js";import"./Link-DTqX9YlE.js";import"./NestedMenu-CmH54Oh9.js";import"./index-DVgFluf-.js";import"./CollapseGroup-CcQHLEBN.js";import"./Divider-lb_4MKWL.js";import"./AnimatePresenceWrapper-CTpOgPg4.js";import"./IconChevronDown-D1JVevKo.js";import"./IconChevronUp-BBNqfNoC.js";import"./IconChevronRight-C9n8GjYD.js";import"./AvatarGroup-BWsBR20l.js";import"./DropzoneFileUpload-CyzGRrck.js";import"./Label-D4Jl0xFN.js";import"./useFormProps-CR2lrn_h.js";import"./ErrorMessage-Cltafpl0.js";import"./IconDynamicComponent-D_VxwX-p.js";import"./Snackbar-eEnRyKeb.js";import"./Alert-CoqWg55s.js";import"./IconDismissFilled-Cqvs6vFF.js";import"./Progress-C6GPG9lz.js";import"./IconAdd-BP2tEC_n.js";import"./Checkbox-BLWyfXay.js";import"./IconInfo-5E5C414h.js";import"./IconCheckmark-CucnadGB.js";import"./Empty-DGZPPlOB.js";import"./Image-CD0Jz3qw.js";import"./Input-QgPKkNFH.js";import"./IconCheckmarkCircleFilled-DKN9RlID.js";import"./IconChevronLeft-DXNeG8cS.js";import"./IconCaretDownFilled-BN_soWhe.js";import"./extends-CF3RwP-h.js";import"./Tab-C2wUTg_a.js";import"./Badge-Clsb_lQL.js";import"./IconMore-ImU3sKFP.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
