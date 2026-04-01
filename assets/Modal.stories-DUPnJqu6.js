import{j as o}from"./jsx-runtime-BQxpd2ht.js";import{r as b}from"./iframe--D5vgDT_.js";import{M,a as f}from"./Popover-C2Lexeb4.js";import{a as x}from"./IconArrowDownloadFilled-BE5Ix8VR.js";import{S as T}from"./index-BgzLi6vR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BCKl1ZE5.js";import"./types-DJbcFeiF.js";import"./helpers-CJDGN4oj.js";import"./IconDismiss-CjNwweel.js";import"./Tooltip-B--s8BaE.js";import"./Text-AJEptl16.js";import"./Button-CaB49cki.js";import"./Link-C0THDajy.js";import"./NestedMenu-DmTcZgTq.js";import"./index-8zuLJ1zv.js";import"./CollapseGroup-D5rr2pM5.js";import"./Divider-DoHnTauf.js";import"./AnimatePresenceWrapper-B8VPnYav.js";import"./IconChevronDown-GvPjXj68.js";import"./IconChevronUp-B8XCEPoW.js";import"./IconChevronRight-BY2t2lzx.js";import"./AvatarGroup-zHC3x737.js";import"./DropzoneFileUpload-DLv4wb7H.js";import"./Label-DBWIlef-.js";import"./useFormProps-DPZj28Bs.js";import"./ErrorMessage-CdgwXUh8.js";import"./IconDynamicComponent-6L_O8Omv.js";import"./Snackbar-DsnPBq31.js";import"./Alert-B4NBc6-x.js";import"./IconDismissFilled-lrVxBCnc.js";import"./Progress-DYqv9BOd.js";import"./IconAdd-Br7nDlwi.js";import"./Checkbox-BN9URe6S.js";import"./IconInfo-UcDs2Oik.js";import"./IconCheckmark-DesYvmZz.js";import"./Empty-BmUyv6uN.js";import"./Image-DRZP0tho.js";import"./Input-BDWt2lHo.js";import"./IconCheckmarkCircleFilled-qoSzZRGT.js";import"./IconChevronLeft-DcTMOg4r.js";import"./IconCaretDownFilled-DErpvGpJ.js";import"./extends-CF3RwP-h.js";import"./Tab-DuB3BxEi.js";import"./Badge-D9iEVhJG.js";import"./IconMore-BVpQE0fp.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
