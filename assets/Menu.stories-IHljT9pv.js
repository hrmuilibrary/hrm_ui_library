import{j as e}from"./jsx-runtime-DLRlo0XP.js";import{r as i}from"./iframe-Bq0w8vBp.js";import{M as C,N as I}from"./NestedMenu-2P-pPLZZ.js";import{B as b}from"./Button-CZ7aR90w.js";import{I as y}from"./IconArrowDownloadFilled-Dy898Vpv.js";import{I as g,a as h,b as x}from"./IconBeach-D66kceDf.js";import{I as M}from"./IconMore-DxAYvLNw.js";import{I as O}from"./IconCheckmark-BqmF3KBP.js";import{I as n}from"./IconSettings-ra4JjfZS.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BUbv8Qc5.js";import"./index-LdNWB7wK.js";import"./Text-BuY9ajB7.js";import"./helpers-Cp_V_y2V.js";import"./index-AboGxAif.js";import"./types-DbpiJ3Vh.js";import"./index-BTju2p1K.js";import"./Popover-D1ArDSyc.js";import"./IconDismiss-aXRj0C3I.js";import"./Link-CWPsl9gq.js";import"./CollapseGroup-JN5INDHY.js";import"./Divider-BeYFIcVG.js";import"./AnimatePresenceWrapper-By07dwLq.js";import"./IconChevronDown-DT4pGUCl.js";import"./IconChevronUp-C04jpLxJ.js";import"./IconChevronRight-CC_3Rh4j.js";import"./AvatarGroup-CItkAbap.js";import"./DropzoneFileUpload-B0CSXyJ3.js";import"./Label-C7EKpaUv.js";import"./useFormProps-C93uHfIG.js";import"./ErrorMessage-BVS2fiqK.js";import"./IconDynamicComponent-D58Y_MXX.js";import"./Snackbar-_FFrVzzP.js";import"./Alert-vHUc5geZ.js";import"./IconDismissFilled-C2gnCQR-.js";import"./Progress-BkE-PESJ.js";import"./IconAdd-BB9wlNmb.js";import"./Checkbox-BEJjaesl.js";import"./IconInfo-BxB4cQwd.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
