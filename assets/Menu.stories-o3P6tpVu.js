import{j as e}from"./jsx-runtime-DjhKDfcS.js";import{r as i}from"./iframe-Ca8NBL8t.js";import{M as C,N as I}from"./NestedMenu-Bii8dG72.js";import{B as b}from"./Button-C0O73vV5.js";import{I as y}from"./IconArrowDownloadFilled-9Sbsswa0.js";import{I as g,a as h,b as x}from"./IconBeach-D-s1vaLA.js";import{I as M}from"./IconMore-C6txNNNu.js";import{I as O}from"./IconCheckmark-KRY5Vr2_.js";import{I as n}from"./IconSettings-HXfbmUct.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DUIrJK35.js";import"./index--uBjFNQu.js";import"./Text-BeiTwP0a.js";import"./helpers-BUdyV6kI.js";import"./index-DYDl_GcV.js";import"./types-B7eFcLlx.js";import"./ModalConfirmation-3Hk9BaoB.js";import"./AnimatePresenceWrapper-V-N3iH_O.js";import"./IconDismiss-BwscnX4t.js";import"./index-B6e9iK9r.js";import"./CollapseGroup-D6lqQ7IV.js";import"./Divider-tziCGiuq.js";import"./IconChevronDown-tBkoGqN_.js";import"./IconChevronUp-4TZbasUM.js";import"./IconChevronRight-CnnHNmoi.js";import"./AvatarGroup-D0rN14UA.js";import"./DropzoneFileUpload-iE1n5HUm.js";import"./Label-BqeyflH7.js";import"./useFormProps-DYVK3eqK.js";import"./ErrorMessage-DrXwMpL9.js";import"./IconDynamicComponent-D6D1t_ok.js";import"./IconDelete-zV-c4Zqe.js";import"./Snackbar-lCV-du8U.js";import"./Alert-Dtepnt8b.js";import"./IconDismissFilled-Bpd42_Eu.js";import"./Progress-CBoLHSsZ.js";import"./IconAdd-D8DFKSVv.js";import"./Checkbox-C7SxCmiI.js";import"./Popover-PsXMKWg2.js";import"./Link-PogqEF71.js";import"./IconInfo-CfoGH7T0.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
